'use strict';

var dbm;
var type;
var seed;
var async = require('async')
var table = 'role_types'
var objs = [
	{
		name:'HQ',
		army_type_id:1
	},
	{
		name:'Troops',
		army_type_id:1
	},
	{
		name:'Elites',
		army_type_id:1
	},
	{
		name:'Fast Attack',
		army_type_id:1
	},
	{
		name:'Heavy Support',
		army_type_id:1
	},
	{
		name:'Dedicated Transport',
		army_type_id:1
	},
	{
		name:'Flyer',
		army_type_id:1
	},
	{
		name:'Fortification',
		army_type_id:1
	},
	{
		name:'Lord of War',
		army_type_id:1
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
