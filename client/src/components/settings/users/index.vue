<script>
	import SettingsFactory from '@/components/settings/factories/index.vue'

	export default {
		extends:SettingsFactory,
		name: 'users',
		data() {
			return {
				module:'users',
				edit_route:'user',
				fields:{
					username:{
						label:'Username',
						show_link:true
					},
					first:{
						label:'First'
					},
					last:{
						label:'Last'
					},
					email:{
						label:'Email'
					},
					options:{
						label:''
					}
				}
			}
		}
	}
</script>