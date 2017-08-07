/*
|-----------------------------------------------------------------
|	DB
|-----------------------------------------------------------------
|
|	DB
|
*/
class DB {
	constructor(options = {}) {
		this._debug = 1
	}

	_query(sql,values,respond) {
		if (typeof values == 'function') {
			respond = values
			values = []
		}

		return pool.query(sql,values)

		//process.pool.query(sql,values,respond)
	}
}

module.exports = DB