<template lang='pug'>
	div
		div.row
			div.col-md-7
				b-breadcrumb(:items='breadcrumb')
			div.col-md-3
				b-pagination.float-right(size='sm',:total-rows='total',:per-page='limit',v-model='page')
			div.col-md-1
				b-form-input(v-model='search',placeholder='Search',size='sm')
			div.col-md-1
				b-form-select(v-model='limit',:options='limitOptions',size='sm')

		div.row
			div.col
				loading(:show='!Boolean(ready)',margintop='200',center)
					b-table(:items='items',:fields='fields',:current-page="1",:per-page="limit",striped,hover,small)

						template(v-for='({ label,show_link,bool },key) in fields',:slot='key',scope='item')
							template(v-if='bool')
								router-link(v-show='show_link',:to='"/settings/" + edit_route + "/" + item.item.id',v-html='item.item[key] ? "Yes" : "No"')
								span(v-show='!show_link',v-html='item.item[key] ? "Yes" : "No"')
							template(v-else)
								router-link(v-show='show_link',:to='"/settings/" + edit_route + "/" + item.item.id',v-html='item.item[key]')
								span(v-show='!show_link',v-html='item.item[key]')
						
						template(slot='options',scope='item')
							b-btn(variant='warning',@click='$router.push(`/settings/${edit_route}/` + item.item.id)',size='sm')
								span.glyphicon.glyphicon-edit

</template>

<script>
	import lodash from 'lodash'
	import loading from '@/components/general/loading.vue'
	import Utils from '@/classes/Utils'

	let DEBOUNCE_TIMEOUT = 500

	export default {
		data() {
			return {
				ready:true,
				limitOptions:[25,50,75,100],
				fields_to_search_by:['name'],
				searchObj:[],

				page:1,
				limit:25,
				search:'',

				items:[],
				total:0
			}
		},
		components:{
			loading
		},
		computed:{
			breadcrumb() {
				return [{ text:`Add`,href:`#/settings/${ this.edit_route }/create`},{ text:this.$root.upper(this.module),active:true }]
			},
			offset() {
				return this.limit * (this.page - 1)
			}
		},
		watch:{
			search:_.debounce(function(val) {
				this.fetchData()
			},DEBOUNCE_TIMEOUT),
			page() {
				this.fetchData()
			},
			limit() {
				this.fetchData()
			}
		},
		methods:{
			changePage(val) {
				this.fetchData()
			},
			fetchData() {
				let vm = this
				if (!vm.ready) return
				vm.ready = false

				vm.$store.dispatch('request',{
						path:`${ vm.module }/index`,
						limit:vm.limit,
						offset:vm.offset,
						search:{
							val:vm.search,
							fields_to_search_by:vm.fields_to_search_by
						}
					})
					.then(data => {
						vm.items = data.items
						vm.total = data.total
						vm.ready = true
					}).catch(err => {
						vm.$root.growl('error',err)
						vm.ready = true
					})
			}
		},
		beforeRouteEnter(to,from,next) {
			return next(vm => vm.fetchData())
		},
		mounted() {
			let vm = this

			
		}
	}
</script>