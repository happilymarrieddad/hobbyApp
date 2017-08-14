
export default class SM {
	static create(options) {
		return {
			state:{
				sgt_equipment_left:[
					{ text:'Bolt Pistol (0)',value:'Bolt Pistol'},
					{ text:'Chainsword (0)',value:'Chainsword'},
					{ text:'Grav-Pistol (8)',value:'Grav-Pistol'},
					{ text:'Plasma Pistol (7)',value:'Plasma Pistol'},
					{ text:'Lightning Claw (8/4)',value:'Lightning Claw'},
					{ text:'Power Axe (5)',value:'Power Axe'},
					{ text:'Power Fist (12)',value:'Power Fist'},
					{ text:'Power Maul (4)',value:'Power Maul'},
					{ text:'Power Sword (4)',value:'Power Sword'},
					{ text:'Thunder Hammer (16)',value:'Thunder Hammer'}
				],
				sgt_equipment_right:[
					{ text:'Boltgun (0)',value:'Boltgun'},
					{ text:'Chainsword (0)',value:'Chainsword'},
					{ text:'Grav-Pistol (8)',value:'Grav-Pistol'},
					{ text:'Plasma Pistol (7)',value:'Plasma Pistol'},
					{ text:'Lightning Claw (8/4)',value:'Lightning Claw'},
					{ text:'Power Axe (5)',value:'Power Axe'},
					{ text:'Power Fist (12)',value:'Power Fist'},
					{ text:'Power Maul (4)',value:'Power Maul'},
					{ text:'Power Sword (4)',value:'Power Sword'},
					{ text:'Thunder Hammer (16)',value:'Thunder Hammer'},
					{ text:'Combi-Flamer (11)',value:'Combi-Flamer'},
					{ text:'Combi-Melta (19)',value:'Combi-Melta'},
					{ text:'Combi-Plasma (15)',value:'Combi-Plasma'},
					{ text:'Storm Bolter (2)',value:'Storm Bolter'}
				],
				primaris_sgt_equipment:[
					{ text:'None (0)',value:'None' },
					{ text:'Power Sword (4)',value:'Power Sword'}
				],
				special:[
					{ text:'None (0)',value:'None' },
					{ text:'Flamer (9)',value:'Flamer' },
					{ text:'Grav-Gun (15)',value:'Grav-Gun' },
					{ text:'Meltagun (17)',value:'Meltagun' },
					{ text:'Plasma Gun (13)',value:'Plasma Gun' }
				],
				heavy:[
					{ text:'None (0)',value:'None' },
					{ text:'Grav-Cannon (28)',value:'Grav-Cannon' },
					{ text:'Heavy Bolter (10)',value:'Heavy Bolter' },
					{ text:'Lascannon (25)',value:'Lascannon' },
					{ text:'Missile-Launcher (25)',value:'Missile-Launcher' },
					{ text:'Multi-Melta (27)',value:'Multi-Melta' },
					{ text:'Plasma Cannon (21)',value:'Plasma Cannon' }
				],



				equipment_pts:[
					{ text:'Bolt Pistol',value:0 },
					{ text:'Boltgun',value:0 },
					{ text:'Chainsword',value:0 },
					{ text:'Grav-Pistol',value:8 },
					{ text:'Plasma Pistol',value:7 },
					{ text:'Lightning Claw',value:8 },
					{ text:'Power Axe',value:5 },
					{ text:'Power Fist',value:12 },
					{ text:'Power Maul',value:4 },
					{ text:'Power Sword',value:4 },
					{ text:'Thunder Hammer',value:16 },
					{ text:'Combi-Flamer',value:11 },
					{ text:'Combi-Melta',value:19 },
					{ text:'Combi-Plasma',value:15 },
					{ text:'Storm Bolter',value:2 },

					{ text:'Bolt Rifle',value:0 },
					{ text:'Auto Bolt Rifle',value:1 },
					{ text:'Stalker Bolt Rifle',value:2 },

					{ text:'Auxiliary Grenade Launcher',value:11 },

					{ text:'Flamer',value:9 },
					{ text:'Grav-Gun',value:15 },
					{ text:'Meltagun',value:17 },
					{ text:'Plasma Gun',value:13 },

					{ text:'Grav-Cannon',value:28 },
					{ text:'Heavy Bolter',value:10 },
					{ text:'Lascannon',value:25 },
					{ text:'Missile-Launcher',value:25 },
					{ text:'Multi-Melta',value:27 },
					{ text:'Plasma Cannon',value:21 }
				]
			},
			mutations:{},
			actions:{},
			getters:{}
		}
	}

}