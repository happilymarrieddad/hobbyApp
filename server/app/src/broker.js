/*
|-----------------------------------------------------------------
|	SocketCluster Broker
|-----------------------------------------------------------------
|
|	Communication between the workers and the cluster is handled
|	here.
|
*/
let scClusterBrokerClient = require('sc-cluster-broker-client')

module.exports.run = function(broker) {
	console.log('   >> Broker PID:', process.pid);
	if (broker.options.clusterStateServerHost) {
		scClusterBrokerClient.attach(broker,{
			stateServerHost: broker.options.clusterStateServerHost,
			stateServerPort: Number(broker.options.clusterStateServerPort),
			authKey: broker.options.clusterAuthKey,
			stateServerConnectTimeout: broker.options.clusterStateServerConnectTimeout,
			stateServerAckTimeout: broker.options.clusterStateServerAckTimeout,
			stateServerReconnectRandomness: broker.options.clusterStateServerReconnectRandomness
		});
	}
}