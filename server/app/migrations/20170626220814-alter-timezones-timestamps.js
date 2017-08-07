'use strict';

var dbm;
var type;
var seed;
var table = 'timezones'

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
	return db.runSql(`
		ALTER TABLE ${ table }
		ADD COLUMN updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
		ADD COLUMN created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
		ADD COLUMN deleted_at timestamp;
		CREATE TRIGGER ${ table }_timestamps_triggers 
		BEFORE UPDATE ON ${ table } 
		FOR EACH ROW SET NEW.deleted_at = CASE WHEN NEW.visible = 1 THEN CURRENT_TIMESTAMP ELSE NULL END
	`);
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
