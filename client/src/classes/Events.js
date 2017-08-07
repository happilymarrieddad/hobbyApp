import Vue from 'vue'

/*
|-----------------------------------------------------------------
|	Events
|-----------------------------------------------------------------
|
|	Event hub manager for Vue.
|
*/
export default class Events {
	/*
	*	Constructor
	*
	*	@summary - none
	*	@params options Object
	*	@return none
	*/
	constructor() {
		this.vue = new Vue()
	}

	/*
	*	Static Create
	*
	*	@summary - none
	*	@params args ArrayObjects
	*	@return none
	*/
	static create(...args) {
		return new Events(...args)
	}

	/*
	*	Emit
	*
	*	@summary - Handle basic emit event
	*/
	emit(event,data) {
		this.vue.$emit(event,data)
	}

	/*
	*	On
	*
	*	@summary - Handle basic vue events
	*/
	on(event,callback) {
		this.vue.$on(event,callback)
	}
}