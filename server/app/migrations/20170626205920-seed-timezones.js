'use strict';

var dbm;
var type;
var seed;
var async = require('async')
var moment = require('moment-timezone')
var table = 'timezones'
var objs = ["-- Please Select A Timezone --"].concat(Object.values(moment.tz._names).sort((a,b) => {
	if (a > b) return 1
	if (a < b) return -1
	return 0
}))

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
	return new Promise((resolve,reject) => {
		async.eachSeries(objs,(obj,next) => {
			db.runSql(`INSERT INTO ${ table } SET ?`,{ name:obj },next)
		// Want to avoid returning an error
		},() => resolve())
	})
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
