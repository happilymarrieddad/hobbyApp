'use strict';

var dbm;
var type;
var seed;
var async = require('async')
var table = 'states'

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
		db.runSql(`SELECT * FROM fusion.states`,(err,rows) => {
			async.eachSeries(rows,(state,next) => {
				db.runSql(`INSERT INTO army_builder.states SET ?`,{
					id:state.id,
					name:state.name,
					abbr:state.val
				},next)
			},resolve)
		})
	})
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
