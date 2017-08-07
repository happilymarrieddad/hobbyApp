<template lang='pug'>
	div
		h3 40k 8th Armies

		b-table(striped,hover,:items='armies',:current-page='currentPage',:per-page='perPage',:fields='fields')

			template(slot='name',scope='item')
				router-link(:to='"/games/fourtyk8th/" + item.item.id') {{ item.item.name }}

			template(slot='options',scope='item')
				b-btn(variant='warning',@click='$router.push(`/games/fourtyk8th/` + item.item.id)',size='sm')
					span.glyphicon.glyphicon-edit

</template>

<script>
	import { mapState } from 'vuex'

	export default {
		data() {
			return {
				currentPage:1,
				perPage:25,
				fields:{
					name:{
						label:'Name',
						sortable:true
					},
					max_points:{
						label:'Max Points',
						sortable:true
					},
					points:{
						label:'Points',
						sortable:true
					},
					options:{
						label:''
					}
				}
			}
		},
		methods:{
			fetchData() {
				let vm = this

				vm.$socket.emit('request',{
					controller:'armies',
					method:'index',
					wheres:{ army_type_id:1 }
				}).then(data => {
					vm.$store.commit('set',{ prop:'armies',val:data.items })
				}).catch(vm.$growl.error)
			}
		},
		computed:{
			...mapState({
				armies(state) {
					return state.armies
				}
			})
		},
		mounted() {
			let vm = this

			vm.fetchData()
		}
	}
</script>