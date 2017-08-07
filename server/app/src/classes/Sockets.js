/*
|-----------------------------------------------------------------
|	Sockets
|-----------------------------------------------------------------
|
|	Sockets
|
*/
let Controllers = require('../controllers/index.js')
let Sessions = require('./models/Sessions.js')

class Sockets {
	constructor() {

	}

	static handshake(req,next) {
		return next()
	}

	static subscribe(req,next) {
		return next()
	}

	static publishIn(req,next) {
		return next()
	}

	static publishOut(req,next) {
		return next()
	}

	static emit(req,next) {
		return next()
	}

	static connect(client) {
		console.log(`Client ${ client.id } connected`)

		client.on('disconnect',() => {
			console.log(`Client ${ client.id } disconnected`)
		})

		client.on('request',(data = {},respond) => {
			if (!data.controller || !data.method) return respond('Invalid request')

			let packet = data
			packet.table = data.controller
			packet.client = client

			if (Controllers[data.controller] && Controllers[data.controller][data.method]) {
				return Controllers[data.controller][data.method](packet,respond)
			}

			try { Controllers.handler[data.method](packet,respond) } catch(err) { console.log(err);return respond('Internal server error.') }
		})

		client.on('login',(data,respond) => {
			Sessions.create(data,(err,user) => {
				if (err) return respond(err)

				if (user && !user.reset_password) client.setAuthToken({ user })
				return respond(null,user)
			})
		})
		
		client.on('logout',(data,respond) => {
			client.deauthenticate()
			respond && respond()
		})
	}

}

module.exports = Sockets