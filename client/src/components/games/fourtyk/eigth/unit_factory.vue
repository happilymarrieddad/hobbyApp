<script>
	

	export default {
		props:['item'],
		data() {
			return {

			}
		},
		methods:{
			fetchData() {
				let vm = this

				vm.$socket.emit('request',{
					controller:'units',
					method:'edit',
					id:vm.item.id
				}).then(data => {
					console.log('Unit Factory data.')
					console.log(data)
				}).catch(vm.$growl.error)
			}
		},
		mounted() {
			let vm = this

			vm.fetchData()
		}
	}
</script>