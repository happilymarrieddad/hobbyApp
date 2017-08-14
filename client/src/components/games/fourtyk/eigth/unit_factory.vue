<script>
	export default {
		props:['item'],
		data() {
			return {
				ready:false
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

					vm.handleData(data)
				}).catch(vm.$growl.error)
			}
		},
		mounted() {
			let vm = this

			vm.fetchData()
		}
	}
</script>