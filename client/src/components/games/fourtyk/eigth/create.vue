<template lang='pug'>
	div
		b-breadcrumb(:items='[{ text:`40k 8th Armies`,href:`#/games/fourtyk8th`},{ text:`Add 40k 8th Army`,active:true }]')
		
		div.row
			div.col
			div.col
					
				b-card(header='Create Army')

					b-form-fieldset(label='Name',horizontal)
						b-form-input(v-model='name')

					b-form-fieldset(label='Army Type',horizontal)
						b-form-select(v-model='army_type_id',:options='army_types')

					b-form-fieldset(label='Max Points',horizontal)
						b-form-input(v-model='max_points')

					template(slot='footer')
						b-button.float-right(variant='success',@click.prevent='create') Create

			div.col

</template>

<script>
	import { mapState } from 'vuex'

	export default {
		data() {
			return {
				name:'',
				army_type_id:0,
				max_points:0
			}
		},
		methods:{
			create() {
				let vm = this

				let name = vm.name
				let army_type_id = vm.army_type_id
				let max_points = vm.max_points

				vm.$socket.emit('request',{
					controller:'armies',
					method:'store',
					post:{ name,army_type_id,max_points,points:0 }
				}).then(data => {

					let army = data.armies
					let route_packet = {
						path:`/games/fourtyk8th/${ army.id }`
					}

					vm.$router.push(route_packet)
				}).catch(err => console.log(err))
			}
		},
		computed:{
			...mapState({
				army_types(state) {
					return [{ text:'-- Select Type --',value:0 }].concat(
						state.army_types.map(el => {
							return { text:el.name,value:el.id }
						})
					)
				}
			})
		}
	}
</script>