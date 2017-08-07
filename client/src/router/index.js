import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let routes = []
const scrollBehavior = (to,from,savedPosition = { x:0,y:0 }) => { return savedPosition }

/*
|--------------------------------------------------------------
|	Dashboard
|--------------------------------------------------------------
|
|	Fallback route for the entire system
|
*/
const Dashboard = () => import('@/components/dashboard/index.vue')
routes.push({ path:'/',name:'dashboard',meta:{ requiresAuth:true,requiredRole:0 },component:Dashboard })



/*
|--------------------------------------------------------------
|	Settings
|--------------------------------------------------------------
|
|	Settings pages are mostly generated from objects by factories
|
*/
const GamesIndex = () => import('@/components/games/index.vue')
const FourtyK8thIndex = () => import('@/components/games/fourtyk/eigth/index.vue')
const FourtyK8thCreate = () => import('@/components/games/fourtyk/eigth/create.vue')
const FourtyK8thEdit = () => import('@/components/games/fourtyk/eigth/edit.vue')
routes.push({ path:'/games',name:'games',meta:{ requiresAuth:true },component:GamesIndex,children:[
	{ path:'fourtyk8th',				component:FourtyK8thIndex,			meta:{ requiresAuth:true } },
	{ path:'fourtyk8th/create',			component:FourtyK8thCreate,			meta:{ requiresAuth:true } },
	{ path:'fourtyk8th/:id',			component:FourtyK8thEdit,			meta:{ requiresAuth:true } }
] })




/*
|--------------------------------------------------------------
|	Settings
|--------------------------------------------------------------
|
|	Settings pages are mostly generated from objects by factories
|
*/
const SettingsIndex = () => import('@/components/settings/index.vue')
const SettingsUsers = () => import('@/components/settings/users/index.vue')
const SettingsEditUsers = () => import('@/components/settings/users/edit.vue')
const SettingsCreateUsers = () => import('@/components/settings/users/create.vue')
routes.push({ path:'/settings',name:'settings',meta:{ requiresAuth:true,requiresAdmin:true },component:SettingsIndex,children:[
	{ path:'users',				component:SettingsUsers,				meta:{ requiresAuth:true,requiresAdmin:true } },
	{ path:'user/create',		component:SettingsCreateUsers,			meta:{ requiresAuth:true,requiresAdmin:true } },
	{ path:'user/:id',			component:SettingsEditUsers,			meta:{ requiresAuth:true,requiresAdmin:true } }
] })





/*
|--------------------------------------------------------------
|	Session
|--------------------------------------------------------------
|
|	Authentication handling
|
*/
const SessionIndex = () => import('@/components/session/index.vue')
const SessionCreate = () => import('@/components/session/create.vue')
const SessionDestroy = () => import('@/components/session/destroy.vue')
routes.push({ path:'/session',name:'session',meta:{ requiresAuth:false },component:SessionIndex,children:[
	{ path:'create',			component:SessionCreate,				meta:{ requiresAuth:false,requiredRole:0 } },
	{ path:'destroy',			component:SessionDestroy,				meta:{ requiresAuth:false,requiredRole:0 } }
] })

export default new Router({ routes,scrollBehavior })
