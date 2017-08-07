<template lang='pug'>
	div
		layout(:items='bitems')
			//- Left Side
			edit-text(:model='item.username',:id='item.id',:table='module',column='username',label='Username')
			edit-text(:model='item.first',:id='item.id',:table='module',column='first',label='First')
			edit-text(:model='item.last',:id='item.id',:table='module',column='last',label='Last')
			edit-text(:model='item.email',:id='item.id',:table='module',column='username',label='Email')
			hr
			edit-select(:model='item.timezone',:id='item.id',:table='module',column='timezone',label='Timezone',:options='timezones_select')

			//- Right Side
			template(slot='tabs')
				tabs

</template>

<script>
	import { mapState } from 'vuex'
	import Utils from '@/classes/Utils.js'

	import SettingsEditFactory from '@/components/settings/factories/edit.vue'
	import LayoutFactory from '@/components/settings/factories/layout.vue'
	import TabsFactory from '@/components/settings/factories/tabs.vue'

	import EditTextFactory from '@/components/general/inputs/edit/text.vue'
	import EditSelectFactory from '@/components/general/inputs/edit/select.vue'

	export default {
		extends:SettingsEditFactory,
		name: 'user-edit',
		data() {
			return {
				module:'users',
				edit_route:'user',
				addressTabIndex:0
			}
		},
		components:{
			layout:LayoutFactory,
			'edit-text':EditTextFactory,
			'edit-select':EditSelectFactory,
			tabs:TabsFactory
		},
		methods:{
			init() {
				let vm = this
				vm.bitems[vm.bitems.length-1].text = vm.item.first + ' ' + vm.item.last
			}
		},
		computed:{
			...mapState({
				timezones_select(state) { return state.timezones_select },
				flag_select(state) { return state.flag_select }
			})
		},
		mounted() {
			let vm = this
		}
	}
</script>