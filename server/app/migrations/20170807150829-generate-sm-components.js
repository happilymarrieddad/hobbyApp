'use strict';

var dbm;
var type;
var seed;
var fs = require('fs')
var army_type_id = 1
var army_type = 'sm'

var indexPath = '../../client/src/components/games/fourtyk/eigth/components/' + army_type + '/index.js'
var directoryPath = '../../client/src/components/games/fourtyk/eigth/components/' + army_type + '/units/'

function queryData(db,qry) {
	return new Promise((resolve,reject) => {
		db.runSql(qry,(err,rows) => {
			if (err) return reject(err)
			return resolve(rows)
		})
	})
}

function writeFile(path,data) {
	return new Promise((resolve,reject) => {
		fs.writeFileSync(path,data)
		return resolve()
	})
}

function addToFile(path,data) {
	return new Promise((resolve,reject) => {
		fs.appendFileSync(path,data)
		return resolve()
	})
}

async function run(db) {
	const rows = await queryData(db,`SELECT * FROM unit_types WHERE army_type_id = ${ army_type_id }`).catch(err => { throw new Error(err) })

	await writeFile(indexPath,``).catch(err => { throw new Error(err) })

	await Promise.all(rows.map(row => {
		return new Promise((resolve,reject) => {

			var filePath = directoryPath + row.component_name.replace(new RegExp('-','g'),'_') + '.vue'
			var fileName = row.component_name.replace(new RegExp('-','g'),'_')

			addToFile(indexPath,`import ${ fileName } from './units/${ row.component_name.replace(new RegExp('-','g'),'_') + '.vue' }'\n`)
			
			fs.writeFileSync(filePath,`
<template lang='pug'>
	div
		span ${ row.name }
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'${ row.component_name }',
		data() {
			return {
				unit_type_id:${ row.id }
			}
		}
	}
</script>
			`)
			return resolve()

		}).catch(err => { throw new Error(err) })
	}))

	await addToFile(indexPath,`\nlet components = {}\n\n`).catch(err => { throw new Error(err) })

	// Write the file to the components
	await Promise.all(rows.map(row => {
		return new Promise((resolve,reject) => {

			var fileName = row.component_name.replace(new RegExp('-','g'),'_')
			
			addToFile(indexPath,`components[${ fileName }.name] = ${ fileName }\n`)

			return resolve()
		}).catch(err => { throw new Error(err) })
	}))

	await addToFile(indexPath,`\nexport default components`).catch(err => { throw new Error(err) })

	return {  }
}

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
	return run(db)
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
