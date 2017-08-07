var fs = require('fs')
var mysql = require('promise-mysql')

var indexPath = '../../../../client/src/components/games/fourtyk/eigth/components/sm/index.js'
var directoryPath = '../../../../client/src/components/games/fourtyk/eigth/components/sm/units/'
var config = require('../../config.json')

var pool = mysql.createPool(config.db_config.masters[0])

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

async function run() {

	const rows = await pool.query(`SELECT * FROM unit_types WHERE army_type_id = 1`).catch(err => { throw new Error(err) })

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

run().then(data => { process.exit() }).catch(err => {
	console.log('ERROR')
	console.log(err)
	console.log('ERROR')
})