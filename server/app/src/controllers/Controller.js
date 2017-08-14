let DEFAULT_LIMIT = 25
let DEFAULT_OFFSET = 0

let ORM = require('../classes/ORM.js')

class Controller {
	constructor(options) {

	}

	static create(options) {
		return new Controller(options)
	}

	/*
	|------------------------------------------------------
	|	Controller:index
	|------------------------------------------------------
	|
	|	
	|
	*/
	index({ table,limit = DEFAULT_LIMIT,offset = DEFAULT_OFFSET,search = [],wheres = {},columns = [],client = {} },respond) {
		let handler = new ORM({ table })
		let col = [`${table}.*`].concat(columns || [])

		let wh = {}

		async function run() {
			let packet = {
				col,
				wh,
				search,
				limit,
				offset
			}

			const [items,total] = await Promise.all([
				handler.read(packet).catch(err => { throw new Error(err) }),
				handler.count(packet).catch(err => { throw new Error(err) })
			])

			return { items,total }
		}

		run().then(res => respond(null,res)).catch(err => {
			console.log(err)
			respond(err.message)
		})
	}

	/*
	|------------------------------------------------------
	|	Controller:store
	|------------------------------------------------------
	|
	|	
	|
	*/
	store({ table,post },respond) {
		let handler = new ORM({ table })

		async function run() {
			let packet = {
				table,
				post
			}

			let res = {}

			res[table] = await handler.store(packet).catch(err => { throw new Error(err) })

			return res
		}

		run().then(res => respond(null,res)).catch(err => respond(err))
	}

	all({ table },respond) {
		let handler = new ORM({ table })

		let wh = {}

		async function run() {
			let packet = { wh,table }

			const items = await handler.read(packet).catch(err => { throw new Error(err) })

			return { items }
		}

		run().then(res => respond(null,res)).catch(err => respond(err))
	}

	findBy({ table,wheres },respond) {
		let handler = new ORM({ table })

		async function run() {
			let packet = {
				wh:wheres
			}

			const items = await handler.read(packet).catch(err => { throw new Error(err) })

			return items || []
		}

		run().then(res => respond(null,res)).catch(err => respond(err))
	}

	edit({ id,table },respond) {
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

	update({ id,table,put },respond) {
		let handler = new ORM({table})

		async function run() {
			let packet = {
				wh:{ id },
				put
			}

			const [res] = await Promise.all([
				handler.update(packet).catch(err => { throw new Error(err) })
			])

			return { res }
		}

		run().then(res => respond(null,res)).catch(err => respond(err))
	}

	create(data,respond) {
		console.log('create')
	}

	destroy({ id,table },respond) {
		let handler = new ORM({table})

		async function run() {
			let packet = {
				id
			}

			const res = await handler.destroy(packet).catch(err => { throw new Error(err) })

			return res
		}

		run().then(res => respond(null,res)).catch(err => respond(err))
	}

}

module.exports = Controller