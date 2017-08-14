let DEFAULT_LIMIT = 25
let DEFAULT_OFFSET = 0

let ORM = require('../classes/ORM.js')

class Controller {
	constructor(options) {

	}

	static create(options) {
		return new Controller(options)
	}

	edit({ id },respond) {
		let table = 'armies'
		let handler = new ORM({ table })

		async function run() {
			let packet = {
				wh:{ id },
				singular:true
			}

			const [item] = await Promise.all([
				handler.read(packet).catch(err => { throw new Error(err) })
			])

			return { item }
		}

		run().then(res => respond(null,res)).catch(err => respond(err))
	}

}

module.exports = Controller