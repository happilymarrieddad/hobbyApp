/*
|-----------------------------------------------------------------
|	Users
|-----------------------------------------------------------------
|
|	Users
|
*/
let config = require('../../../config.json')
let ORM = require('../ORM.js')

class Users extends ORM {
	constructor() {
		super({ table:'users' })
	}

}

module.exports = new Users()