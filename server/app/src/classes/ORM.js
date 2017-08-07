/*
|-----------------------------------------------------------------
|	ORM
|-----------------------------------------------------------------
|
|	ORM
|
*/
let DB = require('./DB.js')

class ORM extends DB {
	constructor({ table,debug }) {
		super({ debug })

		this._table = table
	}

	query(qry,values,respond) {
		this._query(qry,values,respond)
	}

	buildConditionals(wheres,values,default_operator = 'AND',initial_value = '') {
		let self = this

		return Object.keys(wheres).reduce((accumulator,val,index) => {
			let put = {}
			if (typeof wheres[val] != 'object') {
				put = { field:val,val:wheres[val],conditional:'AND',operator:'=' }
			} else {
				put = {
					field:wheres[val].field || val,
					val:wheres[val].val,
					conditional:wheres[val].conditional || 'AND',
					operator:wheres[val].operator || '='
				} 
			}
			if (!put.conditional) put.conditional = 'AND'
			if (!put.operator) put.operator = '='
			if (put.field.indexOf('.') < 0) put.field = `${ self._table }.${ put.field }`
			values.push(put.field)
			values.push(put.val)
			return accumulator += ` ${ index ? put.conditional : default_operator } ?? ${ put.operator } ? `
		},initial_value)
	}

	// This is really ugly.. need to rewrite
	search(srch,default_operator = 'AND',secondary_operators = 'OR') {
		if (!srch || !srch.val || !srch.fields_to_search_by) { console.log('Bad search object passed to the server');console.log(srch);return '' }

		// Example: ' AND (name LIKE "%test%") '
		return srch.fields_to_search_by.reduce(
			(acc,field,index) => acc += ` ${ index ? secondary_operators : "" } ${ field } LIKE "%${ srch.val }%"`, // Build the internal query
			` ${ default_operator } (` // Starting value
		) + `) ` // Ending value
	}

	first(wheres = {}) {
		let self = this

		return new Promise((resolve,reject) => {
			self.read({ wheres,limit:1 })
				.then((data = []) => resolve(data[0]))
				.catch(reject)
		})
	}

	find(wheres = {}) {
		let self = this

		return self.read({ wheres })
	}

	count(options = {},pool = null) {
		let self = this
		let setWhere = false
		options.table = options.table || self._table
		delete options.columns
		delete options.limit
		delete options.offset
		options.columns = [`COUNT(*) AS num`]

		return new Promise((resolve,reject) => {
			self.read(options)
				.then((data = null) => {
					if (!data || !data.length) return resolve(0)
					resolve(data[0].num)
				}).catch(reject)
		})

	}

	read(options = {},pool = null) {
		let self = this
		let setWhere = false

		return new Promise((resolve,reject) => {
			options.table = options.table || self._table
			if (!options.table) return reject('No table set. Unable to grab data.')
			
			// Method
			let qry = `SELECT `
			let values = []

			// Columns
			if (options.col) options.columns = options.col
			qry += ` ${ options.columns ? options.columns.toString() : (options.table + '.*') } `

			// Table
			qry += ` FROM ?? `
			values.push(options.table)

			// Joins
			if (options.joins) {
				options.joins.forEach(join => {
					if (typeof join == 'string') return join
					qry += ` ${ join.type } JOIN ${ join.table } ${ join.alias || '' } ON ${ join.condition }`
				})
			}

			// Conditionals
			if (options.wheres || options.wh || options.cond || options.contionals) {
				setWhere = true
				qry += ` WHERE 1 = 1 `
				options.wheres = options.wh || options.wheres || options.cond || options.contionals
				qry += self.buildConditionals(options.wheres,values)
			}

			// Search
			if (options.search && options.search.length) {
				if (!setWhere) qry += ` WHERE 1 = 1 `
				qry += self.search(options.search)
			}

			// Group By
			if (options.group_by || options.groupby) {
				if (!options.group_by) options.group_by = options.groupby
				qry += ` GROUP BY ${ options.group_by.toString() } `
			}

			// Order By
			if (options.order_by || options.orderby) {
				if (!options.order_by) options.order_by = options.orderby
				qry += ` ORDER BY ${ options.order_by.toString() } `
			}

			// Limit
			if (options.limit) qry += ` LIMIT ${ options.limit } `

			// Offset
			if (options.offset) qry += ` OFFSET ${ options.offset } `

			if (self._debug) {
				console.log(` \nDEBUG `)
				console.log(qry)
				console.log(values)
				console.log(` DEBUG\n `)
			}

			if (pool) {
				return pool.query(qry,values,(err,rows = []) => {
					if (err) return reject(err)

					return resolve(options.singular ? rows[0] : rows)
				})
			}

			self.query(qry,values,(err,rows = []) => {
				if (err) return reject(err)

				return resolve(options.singular ? rows[0] : rows)
			})
		})
	}

	store(options = {},pool = null) {
		let self = this

		return new Promise((resolve,reject) => {
			options.table = options.table || self._table
			if (!options.table) return reject('No table set. Unable to store.')
			if (!options.post) return reject('No post object. Unable to store.')

			let qry = `INSERT INTO ?? SET ?`
			let values = [options.table,options.post]

			if (self._debug) {
				console.log(` \nDEBUG `)
				console.log(qry)
				console.log(values)
				console.log(` DEBUG\n `)
			}

			if (pool) {
				return pool.query(qry,values,(err,rows = []) => {
					if (err) return reject(err)

					return resolve(options.singular ? rows[0] : rows)
				})
			}

			self.query(qry,values,(err,rows) => {
				if (err) return reject(err)

				self.first({id:rows.insertId })
					.then(resolve)
					.catch(reject)
			})
		})
	}

	update(options = {},pool = null) {
		let self = this

		return new Promise((resolve,reject) => {
			options.table = options.table || self._table
			if (!options.put) return reject('A put object is required to update')
			
			// Method
			let qry = `UPDATE ?? `
			let values = [options.table]

			// Set method
			qry += ` SET ? `
			values.push(options.put || {})

			// Conditionals
			if (options.id) {
				qry += ` WHERE id = ? `
				values.push(options.id)
			} else if (options.wheres || options.cond || options.contionals) {
				options.wheres = options.wheres || options.cond || options.contionals
				qry += self.buildConditionals(options.wheres,values)
			}

			if (self._debug) {
				console.log(` \nDEBUG `)
				console.log(qry)
				console.log(values)
				console.log(` DEBUG\n `)
			}

			if (pool) {
				return pool.query(qry,values,(err,rows) => {
					if (err) return reject(err)

					return resolve(rows)
				})
			}

			self.query(qry,values,(err,rows) => {
				if (err) return reject(err)

				return resolve(rows)
			})
		})
	}

	destroy(options = {},pool = null) {
		let self = this

		return new Promise((resolve,reject) => {

		})
	}

}

module.exports = ORM