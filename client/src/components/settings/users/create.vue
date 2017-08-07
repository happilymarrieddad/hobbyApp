<script>
	import { mapState } from 'vuex'
	import CreateFactory from '@/components/settings/factories/create.vue'
	import EventFactory from '@/classes/Events'

	let events = EventFactory.create()

	export default {
		extends:CreateFactory,
		name: 'user-create',
		edit_route:'user',
		data() {
			return {
				module:'users',
				edit_route:'user',
				addressTabIndex:0,
				item:{
					first:{
						val:'',
						label:'First',
						type:'text',
						required:true,
						events:events,
						feedback:'Min 2 length',
						validator(val) { return val.length >= 2 }
					},
					last:{
						val:'',
						label:'Last',
						type:'text',
						required:true,
						events:events,
						feedback:'Min 2 length',
						validator(val) { return val.length >= 2 }
					},
					email:{
						val:'',
						label:'Email',
						type:'text',
						required:true,
						events:events,
						feedback:'Min 2 length',
						validator(val) { return val.length >= 2 }
					}
				}
			}
		},
		mounted() {
			let vm = this
		}
	}
</script>