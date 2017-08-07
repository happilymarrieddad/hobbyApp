var starting_location = '/'
try { starting_location = location.href.split('/#')[1] || '/' } catch(err) {}

/*
|---------------------------------------------
|	Imports
|---------------------------------------------
*/
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Alertify from 'alertifyjs'

/*
|---------------------------------------------
|	Styling
|---------------------------------------------
*/
import 'bootstrap-vue/dist/bootstrap-vue.css'

/*
|---------------------------------------------
|	Factories
|---------------------------------------------
*/
import EventsFactory from '@/classes/Events.js'
import SocketFactory from '@/classes/Socket.js'
import StoreFactory from '@/classes/Store.js'

/*
|---------------------------------------------
|	Configs
|---------------------------------------------
*/
Vue.config.productionTip = false
Alertify.set('notifier','position','top-right')

/*
|---------------------------------------------
|	Init Libs
|---------------------------------------------
*/
Vue.use(BootstrapVue)
Vue.use(Vuex)


/*
|---------------------------------------------
|	Router Middleware
|---------------------------------------------
*/

router.beforeEach((to,from,next) => {
	router.app.loading = true

	// If the route requires auth and they are not authenticated, navigate to the login page.
	if (to.meta.requiresAuth && !router.app.authenticated) {
		router.app.loading = false
		return next('/session/create')
	}

	// If the route requires admin and they are not then navigate to the dashboard
	else if (to.meta.requiresAdmin && router.app.user.type_id != 1) {
		router.app.loading = false
		return next('/')
	}

	return next()
})

router.afterEach((to,from) => {
	//$('title').text("Fusion V4 " + to.fullPath)
	setTimeout(() => {
		router.app.loading = false
	},20)
})

/*
|--------------------------------------------
|	Components
|--------------------------------------------
*/
import Fourtyk8thsm from '@/components/games/fourtyk/eigth/components/sm/index.js'


/*
|---------------------------------------------
|	Plugins
|---------------------------------------------
*/
const Events = EventsFactory.create()
const store = StoreFactory.create({},Events).getStore()
const EventsVue = {
	install(Vue,options) {
		function eventsInit() {
			var options = this.$options

			if (options.events) {
				this.$events = options.events
			} else if (options.parent && options.parent.$events) {
				this.$events = options.parent.$events
			} else {
				this.$events = Events
			}
		}

		var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1
    	Vue.mixin(usesInit ? { init: eventsInit } : { beforeCreate: eventsInit })
	}
}
const Socket = SocketFactory.connect({
	hostname:'localhost',
	port:3000
},Events)
const SocketVue = {
	install(Vue,options) {
		function socketInit() {
			var options = this.$options

			if (options.socket) {
				this.$socket = options.socket
			} else if (options.parent && options.parent.$socket) {
				this.$socket = options.parent.$socket
			} else {
				this.$socket = Socket
			}
		}

		var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1
    	Vue.mixin(usesInit ? { init: socketInit } : { beforeCreate: socketInit })
	}
}
const AlertVue = {
	install(Vue,options) {
		function alertInit() {
			var options = this.$options

			if (options.growl) {
				this.$growl = options.growl
			} else if (options.parent && options.parent.$growl) {
				this.$growl = options.parent.$growl
			} else {
				this.$growl = Alertify
			}
		}

		var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1
    	Vue.mixin(usesInit ? { init: alertInit } : { beforeCreate: alertInit })
	}
}

/*
|---------------------------------------------
|	Install Plugins/Mixins
|---------------------------------------------
*/
Vue.use(AlertVue)
Vue.use(EventsVue)
Vue.use(SocketVue)

Vue.use(Fourtyk8thsm,{ Events })

/*
|---------------------------------------------
|	Vue Root
|---------------------------------------------
*/
new Vue({
	el: '#app',
	data() {
		return {
			authenticated:false,
			user:{}
		}
	},
	router,
	store,
	template: '<App/>',
	components: { App },
	computed:{
		username() {
			return this.user.first + ' ' + this.user.last
		}
	},
	watch:{
		authenticated(val,oldVal) {
			if (val) {
				if (starting_location.indexOf('session') > -1) { starting_location = '/' } 
				router.push({ path:starting_location || '/'}) 
			} else { router.push({ path:'/session/create' }) }
		}
	},
	methods:{
		getInitialData() {
			let vm = this
			let state_tables = ['army_types','unit_types','role_types']

			state_tables.forEach(table => {

				let tbl = table
				vm.$socket.emit('request',{
					controller:tbl,
					method:'all',
				}).then(data => {
					vm.$store.commit('set',{ prop:tbl,val:data.items || [] })
				}).catch(vm.$growl.error)

			})
		}
	},
	mounted() {
		let vm = this
		window.ROOT = vm

		vm.$store.commit('set',{ prop:'$root',val:vm })
		vm.$events.on('socket-authenticate',token => {
			vm.authenticated = true
			vm.user = token.user
		})

		vm.$events.on('socket-deauthenticate',token => {
			vm.authenticated = false
			vm.user = {}
		})

		vm.$events.on(`socket-authStateChange`,({ oldState,newState }) => {
			var authenticated = Boolean(newState && newState == 'authenticated')
		})

		vm.getInitialData()

	}
})
