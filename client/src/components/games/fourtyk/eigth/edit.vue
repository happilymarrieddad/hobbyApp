<template lang='pug'>
	div.row

		div.col-md-2.hidden-print
			template(v-for='role_type in filtered_role_types')
				b-btn(block,v-b-toggle='"accordian" + role_type.id',variant='primary',v-show='role_type.unit_types.length') {{ role_type.name }}
				b-collapse(:id='"accordian" + role_type.id',accordian='fourtyk8th-accordian')
					b-btn(size='sm',v-for='unit_type in role_type.unit_types',:key="unit_type.id",@click='addUnit(unit_type)',style='width:100%') {{ unit_type.name }}
		div.col-md-8
			b-card(variant='primary')
				div.row
					div.col
						strong
							p.text-center Units

			
			div.row
				div.col
					template(v-if='units.length')
						b-card(v-for='(unit,index) in units',style='margin-top:10px',:key='unit.id')
							component(:is='unit.component_name',:key='index',:item='unit',@destroy='removeUnit',@save='saveUnit')
					template(v-else)
						p.text-center No Units Currently Assigned to this Army
						p.text-center Choose Some Units from the Menu on the Left

		div.col-md-2
			b-card(variant='primary')
				div.row
					div.col
						strong {{ name }}
				hr
				div.row
					div.col
						strong Pts:
						span.float-right {{ pts }}
				div.row
					div.col
						strong Pwr Lvl: 
						span.float-right {{ power_level }}

</template>

<script>
	import { mapState } from 'vuex'

	import smComponents from '@/components/games/fourtyk/eigth/components/sm/index.js'

	export default {
		components:Object.assign({},smComponents),
		data() {
			return {
				units:[],
				army_type_id:0,
				max_pts:0,
				name:''
			}
		},
		methods:{
			saveUnit(data) {
				console.log('Save unit')
				console.log(data)
			},
			removeUnit(id) {
				if (!id) return

				this.$socket.emit('request',{
					controller:'units',
					method:'destroy',
					id:id
				})
				.then(data => this.fetchUnits())
				.catch(err => console.log(err))
			},
			addUnit(unit_type) {
				let vm = this

				vm.$socket.emit('request',{
					controller:'units',
					method:'store',
					post:{
						army_id:vm.$route.params.id,
						unit_type_id:unit_type.id
					}
				})
				.then(data => {
					vm.fetchUnits()
				})
				.catch(err => console.log(err))
			},
			fetchUnits() {
				let vm = this

				vm.$socket.emit('request',{
					controller:'units',
					method:'findBy',
					wheres: { army_id:vm.$route.params.id }
				}).then(data => {
					vm.units = data || []
				}).catch(err => console.log(err))
			},
			fetchData() {
				let vm = this

				vm.$socket.emit('request',{
					controller:'armies',
					method:'edit',
					id:vm.$route.params.id
				}).then(data => {
					var item = data.item || null
					if (!item) return this.$growl.error('No army data found. Please contact an administrator.')

					Object.keys(item).forEach(key => vm[key] = item[key])
					vm.fetchUnits()
				}).catch(err => console.log(err))
			}
		},
		computed:{
			power_level() {
				return 0
			},
			pts() {
				return 0
			},
			filtered_role_types() {
				let vm = this
				return vm.role_types.filter(el => el.army_type_id == 1).map(role_type => {
					role_type.unit_types = vm.unit_types.filter(el => el.role_type_id == role_type.id)
					return role_type
				})
			},
			filtered_unit_types() {
				return this.unit_types.filter(el => el.army_type_id == 1)
			},
			...mapState({
				unit_types(state) {
					return state.unit_types
				},
				role_types(state) {
					return state.role_types
				}
			})
		},
		mounted() {
			let vm = this

			vm.fetchData()
		}
	}
</script>