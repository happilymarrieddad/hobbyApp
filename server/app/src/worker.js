/*
|-----------------------------------------------------------------
|	SocketCluster Worker
|-----------------------------------------------------------------
|
|	Client requests are handled here.
|
*/
let config = require('../config.json')
let express = require('express')
let mysql = require('promise-mysql')
let Server = require('./classes/Server.js')

module.exports.run = function(worker) {
	process.NODE_ENV = config.NODE_ENV

	// Setup Logs
	process.error = function(...args) {
		if (debug) console.error(...args)
	}

	process.log = function(...args) {
		if (debug) console.log(...args)
	}

	// Setup server
	let app = express()
    let httpServer = worker.httpServer
    let scServer = worker.scServer

    let startWorker = function() {
	    scServer.addMiddleware(scServer.MIDDLEWARE_HANDSHAKE,Server.handshake)
		scServer.addMiddleware(scServer.MIDDLEWARE_SUBSCRIBE,Server.subscribe)
		scServer.addMiddleware(scServer.MIDDLEWARE_PUBLISH_IN,Server.publishIn)
		scServer.addMiddleware(scServer.MIDDLEWARE_PUBLISH_OUT,Server.publishOut)
		scServer.addMiddleware(scServer.MIDDLEWARE_EMIT,Server.emit)

		scServer.on('connection',Server.connect)
    	httpServer.on('request', app)
    	console.log(`  >> Worker PID: ${ process.pid } Id: ${ worker.id } is active.`)
    }

	// Setup Database
	let pool = mysql.createPool(config.db)

	// for (let i = 0,ilen = config.db_config.masters.length; i < ilen; i++) {
	// 	let master = config.db_config.masters[i]
	// 	let master_config = {
	// 		host:master.host,
	// 		user:master.user,
	// 		password:master.password,
	// 		database:master.database
	// 	}

	// 	pool.addMaster(`MASTER${i}`,master_config)

	// 	let slaves = master.slaves || []
	// 	for (let j = 0,jlen = slaves.length; j < jlen; j++) {
	// 		let slave = master.slaves[j]
	// 		let slave_config = {
	// 			host:slave.host,
	// 			user:slave.user,
	// 			password:slave.password,
	// 			database:slave.database
	// 		}

	// 		pool.addSlave(`SLAVE${j}`,`MASTER${i}`,slave_config)
	// 	}
	// }

	process.pool = pool
	return startWorker()
	
}