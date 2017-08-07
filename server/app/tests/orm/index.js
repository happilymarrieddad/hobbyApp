let config = require('../../config.json')
var pool = require('mysql').createPool({
	host:config.db_config.masters[0].host,
	user:config.db_config.masters[0].user,
	password:config.db_config.masters[0].password,
	database:config.db_config.masters[0].database
})

let ORM = require('../../src/classes/ORM')

let orm = new ORM({
	table:'users',
	debug:1
})

orm.find({},pool)
	.then(data => {
		console.log('Data')
		console.log(data)
	})
	.catch(err => {
		console.log('Error')
		console.log(err)
	})