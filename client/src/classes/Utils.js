import moment from 'moment-timezone'
import momentdata from '../../static/js/moment-timezone-with-data-2012-2022.js'

/*
|-----------------------------------------------------------------
|	Utils
|-----------------------------------------------------------------
|
|	General functions available throughout the app.
|
*/
export default class Utils {
	/*
	*	Constructor
	*
	*	@summary - none
	*	@params options Object
	*	@return none
	*/
	constructor(options) {
		let self = this
	}

	/*
	*	To Database Format
	*
	*	@summary - Change the date to the mysql date format
	*	@params date Date
	*	@return Moment Instance
	*/
	static toDatabaseFormat(date) {
		return moment(date,"MM/DD/YYYY HH:mm").format("YYYY-MM-DD HH:mm")
	}

	/*
	*	From Database Format
	*
	*	@summary - Change the date from a mysql date
	*	@params date Date
	*	@return Moment Instance
	*/
	static fromDatabaseFormat(date) {
		return moment(date,"YYYY-MM-DD HH:mm").format("MM/DD/YYYY HH:mm")
	}

	/*
	*	Copy
	*
	*	@summary - A more robust object copy function
	*	@params target Object - The object to copy to
	*	@params source Object - The object to copy from
	*	@params ignores Array - Parameters to ignore
	*	@return object
	*/
	static copy(target = {},source = {},ignores = []) {
		for (let key in source) {
			if (!ignores.includes(key)) target[key] = source[key]
		}
		return target
	}

	/*
	*	GetTimezones
	*
	*	@summary - Get the timezones from moment
	*	@return Array
	*/
	static getTimezones() {
		return ["-- Please Select A Timezone --"].concat(Object.values(moment.tz._names).sort((a,b) => {
			if (a > b) return 1
			if (a < b) return -1
			return 0
		}))
	}

	static createSearchObj(val_to_search_for,fields_to_search_by) {
		if (!val_to_search_for) {
			return []
		}

		return vm.fields_to_search_by.map(field => {
			let obj = {}
			obj[field] = vm.search
			return obj
		})
	}

	static replaceAll(str,search,rep) {
		return str.replace(new RegExp(search,'g'),rep)
	}

	static assignProps(object_to_assign,object_assign_from,fields = []) {
		if (!fields.length) return Object.assign(object_to_assign,object_assign_from)

		fields.forEach(field => object_to_assign[field] = object_assign_from[field])
	}

	static createLabel(val) {
		return `${ Utils.replaceAll(val,"_"," ").split(" ").map(el => el[0].toUpperCase() + el.substr(1)).join(' ') }`
	}

}