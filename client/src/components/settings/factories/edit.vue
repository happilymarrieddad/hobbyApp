<script>
	import Utils from '@/classes/Utils.js'

	export default {
		data() {
			return {
				ready:true,
				bitems:[],
				item:{},
				address_info:{},
				editProps:{},
				propsToDisplay:['name'],
				formType:"edit"
			}
		},
		computed:{
			id() { return this.$route.params.id }
		},
		methods:{
			fetchData() {
				let vm = this
				if (!vm.ready) return
				vm.ready = false

				vm.$store.dispatch('request',{
						path:`${ vm.module }/edit`,
						id:vm.id
					})
					.then((data = {item:{}}) => {
						vm.bitems[vm.bitems.length-1].text = data.item.name
						vm.item = data.item
						vm.init()

						setTimeout(() => vm.ready = true,50)
					}).catch(err => {
						vm.$root.growl('error',err)
						setTimeout(() => vm.ready = true,50)
					})
			},
			init() {}
		},
		beforeRouteEnter(to,from,next) {
			return next(vm => {
				vm.bitems.push({
					text:``,
					active:true
				})
				vm.bitems.unshift({
					text:`${ vm.$root.upper(vm.module) }`,
					to:`/settings/${ vm.module }`
				})

				vm.$nextTick(vm.fetchData)
			})
		},
		mounted() {
			let vm = this

		}
	}
</script>