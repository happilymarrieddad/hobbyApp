'use strict';

var dbm;
var type;
var seed;
var async = require('async')
var table = 'users'

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
	return db.createTable(table,{
		columns:{
			id: { type: "int", primaryKey:true, autoIncrement: true, notNull: true },
			username: { type: "string", length: 200 },
			first: { type: "string", length: 200, notNull: true },
			last: { type: "string", length: 200, notNull: true },
			email: { type: "string", length: 200, notNull: true },
			password: { type: "string", length: 200, notNull: true },

			address: { type: "string", length: 200, notNull: true },
			address_two: { type: "string", length: 200, notNull: true },
			city: { type: "string", length: 100, notNull: true },
			state_id: { type:'int',length:11,defaultValue:3 },
			zip: { type: "string", length: 20, notNull: true },

			type_id: { type:'int',length:11,defaultValue:3 },
			timezone: { type:'int',length:11,defaultValue:106 }, // 'America/Denver'
			updated_by: { type:'int',length:11,defaultValue:0 },
			created_by: { type:'int',length:11,defaultValue:0 },
			deleted_by: { type:'int',length:11,defaultValue:0 },
			reset_password: { type:'smallint',length:1,defaultValue:1 },
			password_reset_hash: { type:'string',length:200,defaultValue:'' },
			active: { type:'smallint',length:1,defaultValue:1 },
			visible: { type:'smallint',length:1,defaultValue:1 }
		},
		ifNotExists:true
	})
};

exports.down = function(db) {
  return db.dropTable(table);
};

exports._meta = {
  "version": 1
};
