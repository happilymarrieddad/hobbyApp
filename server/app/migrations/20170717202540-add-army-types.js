'use strict';

var dbm;
var type;
var seed;
var async = require('async')
var table = 'army_types'

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
		id: { type: "int", primaryKey:true, autoIncrement: true, notNull: true },
		name: { type: "string", length: 200 },
		game_type_id: { type:'int',length:11 },
		updated_by: { type:'int',length:11,defaultValue:0 },
		created_by: { type:'int',length:11,defaultValue:0 },
		deleted_by: { type:'int',length:11,defaultValue:0 },
		visible: { type:'smallint',length:1,defaultValue:1 }
	})
};

exports.down = function(db) {
  return db.dropTable(table);
};

exports._meta = {
  "version": 1
};
