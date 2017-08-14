let DEFAULT_LIMIT = 25
let DEFAULT_OFFSET = 0

let ORM = require('../classes/ORM.js')

class Controller {
	constructor(options) {

	}

	static create(options) {
		return new Controller(options)
	}

	findBy({ table,wheres },respond) {
		let handler = new ORM({ table })

		wheres.visible = 1
		async function run() {
			let packet = {
				columns:['units.*','unit_types.name AS unit_type_name','unit_types.component_name AS component_name'],
				wh:wheres,
				joins:[
					{
						type:'LEFT',
						table:'unit_types',
						condition:'units.unit_type_id = unit_types.id'
					}
				],
				order_by:'unit_types.role_type_id,unit_types.id'
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

			const [unit_base_data] = await Promise.all([
				handler.read(packet).catch(err => { throw new Error(err) })
			])

			return { unit_base_data }
		}

		run().then(res => respond(null,res)).catch(err => respond(err))
	}

}

module.exports = Controller