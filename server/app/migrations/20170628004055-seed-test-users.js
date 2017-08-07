'use strict';

var dbm;
var type;
var seed;
var async = require('async')
var table = 'users'
var objs = [
	{
		username:'Nick Kotenberg',
		first:'Nick',
		last:'Kotenberg',
		email:'happilymarrieddad@gmail.com',
		address:'3017 Kevin Circle',
		city:'Idaho Falls',
		state_id:13,
		zip:'83402'
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
			obj.password = '$2a$10$S3SbOPqe6QB3UxWtJ6eJdeu0XnGTnATuRAe0ncbv0ljs3eUU/71va'
			obj.type_id = 1
			obj.reset_password = 0
			obj.timezone = 106
			obj.active = 1
			obj.visible = 1
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
