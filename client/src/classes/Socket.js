import SCClient from 'socketcluster-client'

export default class Socket {
	constructor(config = {},Events) {
		this._socket = SCClient.connect(config)

		this.init(Events)
	}


	/*
	|-----------------------------------------
	|	Connect
	|-----------------------------------------
	|
	|	Can be ['CONNECTING','OPEN','CLOSED']
	|
	*/
	static connect(config = {},Events) {
		return new Socket(config,Events)
	}

	/*
	|-----------------------------------------
	|	Emit
	|-----------------------------------------
	*/
	emit(channel,data,respond) {
		let vm = this

		return new Promise((resolve,reject) => {
			vm._socket.emit(channel,data,(err,res) => {
				if (err) return reject(err)
				return resolve(res)
			})
		})
	}

	/*
	|-----------------------------------------
	|	Publish
	|-----------------------------------------
	*/
	publish(channel,data,respond) {
		this._socket.publish(channel,data,respond)
	}

	/*
	|-----------------------------------------
	|	Init
	|-----------------------------------------
	|
	|	Initialize listeners
	|
	*/
	init(Events) {
		let vm = this
		if (!Events) return console.log('No events to bind socket connection to.')

		vm._socket.on('error',() => Events.emit(`socket-error`,null))
		vm._socket.on('connect',() => Events.emit(`socket-connect`,null))
		vm._socket.on('disconnect',() => Events.emit(`socket-disconnect`,null))
		vm._socket.on('authStateChange',data => Events.emit(`socket-authStateChange`,data))
		vm._socket.on('authTokenChange',() => Events.emit(`socket-authTokenChange`,vm.getAuthToken()))
		vm._socket.on('authenticate',() => Events.emit(`socket-authenticate`,vm.getAuthToken()))
		vm._socket.on('deauthenticate',() => Events.emit(`socket-deauthenticate`,null))
	}

	/*
	|-----------------------------------------
	|	Get State
	|-----------------------------------------
	|
	|	Can be ['CONNECTING','OPEN','CLOSED']
	|
	*/
	getState() {
		return this._socket.state
	}

	/*
	|--------------------------------------------------------
	|	Get Auth State
	|--------------------------------------------------------
	|
	|	Can be ['AUTHENTICATED','UNAUTHENTICATED','PENDING']
	|
	*/
	getAuthState() {
		return this._socket.authState
	}

	/*
	|-----------------------------------------
	|	Get Auth Token
	|-----------------------------------------
	|
	|	Returns auth object
	|
	*/
	getAuthToken() {
		return this._socket.authToken
	}

}