/*
|-----------------------------------------------------------------
|	SocketCluster Master
|-----------------------------------------------------------------
|
|	This is where the main cluster is handled.
|
*/

// Change the working directory so we can start the server from another path
process.chdir('./server/app')

let SocketCluster = require('socketcluster').SocketCluster
let SCHotReboot = require('sc-hot-reboot')
let os = require('os')
let config = require('../config.json')

process.env = config
let cpus = os.cpus().length

let options = {
	workers:(cpus / 2) || 1,
	brokers:1,
	workerController:'./src/worker.js',
	brokerController:'./src/broker.js',
	port:config.PORT || 3000,
	wsEngine:"uws",
	appName:'fusionware',
	initController:null,
	socketChannelLimit:1000,
	clusterStateServerHost: process.env.SCC_STATE_SERVER_HOST || null,
	clusterStateServerPort: process.env.SCC_STATE_SERVER_PORT || null,
	clusterAuthKey: process.env.SCC_AUTH_KEY || null,
	clusterStateServerConnectTimeout: Number(process.env.SCC_STATE_SERVER_CONNECT_TIMEOUT) || null,
	clusterStateServerAckTimeout: Number(process.env.SCC_STATE_SERVER_ACK_TIMEOUT) || null,
	clusterStateServerReconnectRandomness: Number(process.env.SCC_STATE_SERVER_RECONNECT_RANDOMNESS) || null,
	crashWorkerOnError: true,
	rebootWorkerOnCrash:true,
	killMasterOnSignal: false,
	environment: config.NODE_ENV
}

var masterCluster = new SocketCluster(options)

if (config.NODE_ENV == 'dev' || config.NODE_ENV == 'development') {
	console.log(`   !! The sc-hot-reboot plugin is watching for code changes in the ${__dirname} directory`)
	SCHotReboot.attach(masterCluster, {
		cwd: __dirname,
		ignored: ['node_modules', 'README.md', 'server.js', 'broker.js', /[\/\\]\./, '*.log', '*.json']
	})
}