'use strict';

var dbm;
var type;
var seed;
var async = require('async')
var table = 'unit_types'
var objs = [
	// HQ
	{
		name:'Marneus Calgar',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-marneus-calgar'
	},{
		name:'Chief Librarian Tigurius',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-librarian-tigurius'
	},{
		name:'Chaplain Cassius',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-chaplain-cassius'
	},{
		name:'Captain Sicarius',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-captain-sicarius'
	},{
		name:'Sergeant Chronus',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-sergeant-chronus'
	},{
		name:'Sergeant Telion',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-sergeant-telion'
	},{
		name:'Captain Lysander',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-captain-lysander'
	},{
		name:'Pedro Kantor',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-pedro-kantor'
	},{
		name:'High Marshal Helbrecht',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-high-marshal-helbrecht'
	},{
		name:'The Emperor\'s Champion',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-emperors-champion'
	},{
		name:'Chaplain Grimaldus',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-chaplain-grimaldus'
	},{
		name:'Cenobyte Servitors',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-cenobyte-servitors'
	},{
		name:'Kor\'sarro Khan',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-korsarro-khan'
	},{
		name:'Vulkan He\'stan',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-vulkan-hestan'
	},{
		name:'Kayvaan Shrike',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-kayvaan-shrike'
	},{
		name:'Captain (Terminator)',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-captain-terminator'
	},{
		name:'Captain (Cataphractii)',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-captain-cataphractii'
	},{
		name:'Captain',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-captain'
	},{
		name:'Captain (Bike)',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-captain-bike'
	},{
		name:'Primaris Captain',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-primaris-captain'
	},{
		name:'Captain (Gravis)',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-captain-gravis'
	},{
		name:'Librarian',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-librarian'
	},{
		name:'Primaris Librarian',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-primaris-librarian'
	},{
		name:'Librarian (Terminator)',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-librarian-terminator'
	},{
		name:'Chaplain (Terminator)',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-chaplain-terminator'
	},{
		name:'Chaplain',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-chaplain'
	},{
		name:'Primaris Chaplain',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-primaris-chaplain'
	},{
		name:'Techmarine',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-techmarine'
	},{
		name:'Lieutenants',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-lieutenants'
	},{
		name:'Primaris Lieutenants',
		army_type_id:1,
		role_type_id:1,
		component_name:'fourtyk-sm-primaris-lieutenants'
	
	// Troops
	},{
	

		name:'Tactical Squad',
		army_type_id:1,
		role_type_id:2,
		component_name:'fourtyk-sm-tactical-squad'
	},{
		name:'Intercessor Squad',
		army_type_id:1,
		role_type_id:2,
		component_name:'fourtyk-sm-intercessor-squad'
	},{
		name:'Scout Squad',
		army_type_id:1,
		role_type_id:2,
		component_name:'fourtyk-sm-scout-squad'
	},{
		name:'Crusader Squad',
		army_type_id:1,
		role_type_id:2,
		component_name:'fourtyk-sm-crusader-squad'
	
	// Elites
	},{
		name:'Primaris Ancient',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-primaris-ancient'
	},{
		name:'Chapter Ancient',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-chapter-ancient'
	},{
		name:'Chapter Champion',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-chapter-champion'
	},{
		name:'Honour Guard',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-honour-guard'
	},{
		name:'Company Ancient',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-company-ancient'
	},{
		name:'Apothecary',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-apothecary'
	},{
		name:'Company Champion',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-company-champion'
	},{
		name:'Company Veterans',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-company-veterans'
	},{
		name:'Servitors',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-servitors'
	},{
		name:'Primaris Apothecary',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-primaris-apothecary'
	},{
		name:'Reiver Squad',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-revier-squad'
	},{
		name:'Aggressor Squad',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-aggressor-squad'
	},{
		name:'Terminator Squad',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-terminator-squad'
	},{
		name:'Terminator Assault Squad',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-terminator-assault-squad'
	},{
		name:'Cataphractii Terminator Squad',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-cataphractii-terminator-squad'
	},{
		name:'Tartaros Terminator Squad',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-tartaros-terminator-squad'
	},{
		name:'Vanguard Veteran Squad',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-vanguard-veteran-squad'
	},{
		name:'Sternguard Veteran Squad',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-sternguard-veteran-squad'
	},{
		name:'Dreadnought',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-dreadnought'
	},{
		name:'Ironclad Dreadnought',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-ironclad-dreadnought'
	},{
		name:'Venerable Dreadnought',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-venerable-dreadnought'
	},{
		name:'Contemptor Dreadnought',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-contemptor-dreadnought'
	},{
		name:'Redemptor Dreadnought',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-redemptor-dreadnought'
	},{
		name:'Centurion Assault Squad',
		army_type_id:1,
		role_type_id:3,
		component_name:'fourtyk-sm-centurion-assault-squad'


	// Fast Attack
	},{
		name:'Bike Squad',
		army_type_id:1,
		role_type_id:4,
		component_name:'fourtyk-sm-bike-squad'
	},{
		name:'Assault Squad',
		army_type_id:1,
		role_type_id:4,
		component_name:'fourtyk-sm-assault-squad'
	},{
		name:'Land Speeders',
		army_type_id:1,
		role_type_id:4,
		component_name:'fourtyk-sm-land-speeders'
	},{
		name:'Attack Bike Squad',
		army_type_id:1,
		role_type_id:4,
		component_name:'fourtyk-sm-attack-bike-squad'
	},{
		name:'Scout Bike Squad',
		army_type_id:1,
		role_type_id:4,
		component_name:'fourtyk-sm-scout-bike-squad'
	},{
		name:'Inceptor Squad',
		army_type_id:1,
		role_type_id:4,
		component_name:'fourtyk-sm-inceptor-squad'


	// Heavy Support
	},{
		name:'Devastator Squad',
		army_type_id:1,
		role_type_id:5,
		component_name:'fourtyk-sm-devastator-squad'
	},{
		name:'Centurion Devastator Squad',
		army_type_id:1,
		role_type_id:5,
		component_name:'fourtyk-sm-centurion-devastator-squad'
	},{
		name:'Hellblaster Squad',
		army_type_id:1,
		role_type_id:5,
		component_name:'fourtyk-sm-hellblaster-squad'
	},{
		name:'Thunderfire Cannon',
		army_type_id:1,
		role_type_id:5,
		component_name:'fourtyk-sm-thunderfire-cannon'
	},{
		name:'Hunter',
		army_type_id:1,
		role_type_id:5,
		component_name:'fourtyk-sm-hunter'
	},{
		name:'Stalker',
		army_type_id:1,
		role_type_id:5,
		component_name:'fourtyk-sm-stalker'
	},{
		name:'Whirlwind',
		army_type_id:1,
		role_type_id:5,
		component_name:'fourtyk-sm-whirlwind'
	},{
		name:'Predator',
		army_type_id:1,
		role_type_id:5,
		component_name:'fourtyk-sm-predator'
	},{
		name:'Vindicator',
		army_type_id:1,
		role_type_id:5,
		component_name:'fourtyk-sm-vindicator'
	},{
		name:'Land Raider',
		army_type_id:1,
		role_type_id:5,
		component_name:'fourtyk-sm-land-raider'
	},{
		name:'Land Raider Crusader',
		army_type_id:1,
		role_type_id:5,
		component_name:'fourtyk-sm-land-raider-crusader'
	},{
		name:'Land Raider Redeemer',
		army_type_id:1,
		role_type_id:5,
		component_name:'fourtyk-sm-land-raider-redeemer'



	// Dedicated Transport
	},{
		name:'Rhino',
		army_type_id:1,
		role_type_id:6,
		component_name:'fourtyk-sm-rhino'
	},{
		name:'Razorback',
		army_type_id:1,
		role_type_id:6,
		component_name:'fourtyk-sm-razorback'
	},{
		name:'Drop Pod',
		army_type_id:1,
		role_type_id:6,
		component_name:'fourtyk-sm-drop-pod'
	},{
		name:'Land Speeder Storm',
		army_type_id:1,
		role_type_id:6,
		component_name:'fourtyk-sm-land-speeder-storm'
	},{
		name:'Repulsor',
		army_type_id:1,
		role_type_id:6,
		component_name:'fourtyk-sm-repulsor'



	// Flyer
	},{
		name:'Stormhawk Interceptor',
		army_type_id:1,
		role_type_id:7,
		component_name:'fourtyk-sm-stormhawk-interceptor'
	},{
		name:'Stormraven Gunship',
		army_type_id:1,
		role_type_id:7,
		component_name:'fourtyk-sm-stormraven-gunship'
	},{
		name:'Stormtalon Gunship',
		army_type_id:1,
		role_type_id:7,
		component_name:'fourtyk-sm-stormtalon-gunship'



	// Lord of War
	},{
		name:'Roboute Guilliman',
		army_type_id:1,
		role_type_id:9,
		component_name:'fourtyk-sm-roboute-guilliman'
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
			db.runSql(`INSERT INTO ${ table } SET ?`,obj,(err,rows) => {
				if (err) return console.log(err)

				return next()
			})
		},() => resolve())
	})
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
