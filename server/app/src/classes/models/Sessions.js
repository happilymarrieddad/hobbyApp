/*
|-----------------------------------------------------------------
|	Sessions
|-----------------------------------------------------------------
|
|	Sessions
|
*/
let config = require('../../../config.json')
let Users = require('./Users.js')
let Password = require('./Password.js')
const uuidv4 = require('uuid/v4')
let Email = require('./Email.js')

class Sessions {
	constructor() {

	}

	static create(data,respond) {
		
		async function run() {
			const user = await Users
				.first({wheres:{
					email:data.email,
					visible:1
				}})
				.catch(err => { throw new Error(err) })

			if (!user) throw new Error('No account found')
			const isValid = Password.compare(data.password,user.password)
			if (!isValid) throw new Error('Account credentials are invalid.')

			if (user && user.reset_password) {
				let passwordReset = uuidv4()
				let packet = {
					to:user.email,
					subject:'Fusionware: Request to change password',
					html:`
					<h3>Fusionware: Request to change password</h3>
					<a href="${ config.SERVER_ADDRESS }/#/password/update?email=${ user.email }&reset=${ passwordReset }">Click here to change your password</a>
					`
				}

				if (user && user.reset_password) Email.send(packet)

				const userIsUpdated = await Users
					.update({
						id:user.id,
						put:{ password_reset_hash:passwordReset	}
					})
					.catch(err => {
						console.log(err)
						throw new Error(err)
					})
			}

			return user
		}

		run()
			.then(user => respond(null,user))
			.catch(respond)	
	}

}

module.exports = Sessions