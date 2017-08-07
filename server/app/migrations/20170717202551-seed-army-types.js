'use strict';

var dbm;
var type;
var seed;
var async = require('async')
var table = 'army_types'
var objs = [
	{
    name:'Space Marines',
    game_type_id:1
  }
]

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
			db.runSql(`INSERT INTO ${ table } SET ?`,obj,next)
		},() => resolve())
	})
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
