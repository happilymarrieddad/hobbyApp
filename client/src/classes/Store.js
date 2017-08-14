import Vuex from 'vuex'

import SMModule from '@/classes/modules/SM.js'

/*
|-----------------------------------------------------------------
|	Store
|-----------------------------------------------------------------
|
|	The general store for the client-side app. All the state data
|	for the app.
|
*/
export default class Store {
	/*
	*	Constructor
	*
	*	@summary - none
	*	@params options Object
	*	@return none
	*/
	constructor(options,Events = null) {
		let self = this
		
		self.events = Events
		self.store = new Vuex.Store({
			modules:{
				SM:SMModule.create()
			},
			state:{
				$root:null,
				army_types:[],
				unit_types:[],
				armies:[]
			},
			mutations:{
				set(state,context) {
					state[context.prop] = context.val
				}
			},
			actions:{

			},
			getters:{
				getRoot(state) {
					return state.$root
				}
			}
		})

		this.addEventListeners()
	}

	/*
	*	Static Create
	*
	*	@summary - none
	*	@params args ArrayObjects
	*	@return none
	*/
	static create(...args) {
		return new Store(...args)
	}

	/*
	*	Get Store
	*
	*	@summary - none
	*	@return store VuexObject
	*/
	getStore() {
		return this.store
	}

	/*
	*	Add Event Listeners
	*
	*	@summary - Here, you instantiate events for the app -> store
	*/
	addEventListeners() {
		let vm = this
		
	}

}