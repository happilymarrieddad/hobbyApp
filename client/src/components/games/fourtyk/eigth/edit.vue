<template lang='pug'>
	div.row

		div.col-md-2
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
				hr
				br
				div.row
					div.col
						keep-alive
							template(v-if='units.length')
								component(v-for='(unit,index) in units',:is='unit.component_name',:key='index',:item='unit')
							template(v-else)
								p.text-center No Units Currently Assigned to this Army
								p.text-center Choose Some Units from the Menu on the Left
		div.col-md-2
			b-card(variant='primary')
				div.row
					div.col
						strong Name: 
						br
						span {{ name }}
				hr
				div.row
					div.col-md-4 Pts: {{ points }}
					div.col-md-8 Pwr Lvl: {{ power_level }}

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
				max_points:0,
				name:''
			}
		},
		methods:{
			addUnit(unit_type) {
				let vm = this

				vm.$socket.emit('request',{
					controller:'units',
					method:'store',
					post:{
						army_id:vm.$route.params.id,
						unit_type_id:unit_type.id
					}
				}).then(data => {
					vm.fetchUnits()
				}).catch(this.$growl.error)
			},
			fetchUnits() {
				let vm = this

				vm.$socket.emit('request',{
					controller:'units',
					method:'findBy',
					wheres: { army_id:vm.$route.params.id }
				}).then(data => {
					vm.units = data || []
				}).catch(this.$growl.error)
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
				}).catch(this.$growl.error)
			}
		},
		computed:{
			power_level() {
				return 0
			},
			points() {
				return 0
			},
			id() {
				return this.$route.params.id
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