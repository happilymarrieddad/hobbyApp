<template lang='pug'>
	div
		div.row
			div.col-md-7
				b-breadcrumb(:items='breadcrumb')

		div.row
			div.col-md-1
			div.col-md-3
				template(v-for='(options,field,index) in item')
					component(:is='"c" + options.type',:label='options.label',:required='options.required',:validator='options.validator',:feedback='options.feedback',:events='options.events',:val='options.val',@update='update',:field='field',:options='options.options')

			div.col-md-7
			div.col-md-1

		div.row
			div.col-md-1
			div.col-md-10
				hr
				b-button-group(size='sm')
					b-button(variant='success',@click='save',:disabled='disableSaveButton') Save
					b-button(variant='default',@click='clear') Clear

</template>

<script>
	import ctext from '@/components/general/inputs/create/text.vue'
	import cselect from '@/components/general/inputs/create/select.vue'
	import EventFactory from '@/classes/Events'

	let events = EventFactory.create()

	export default {
		data() {
			return {
				ready:true,
				numEventHandlers:0,
				numEventsHeard:0,
				item:{
					// name:{
					// 	val:'',
					// 	label:'Name',
					// 	type:'text',
					// 	required:true,
					// 	events:events,
					// 	feedback:'Name is required.',
					// 	validator(val) { return val.length > 2 }
					// }
				}
			}
		},
		methods:{
			update(field,val) {
				this.item[field].val = val
			},
			clear() {
				for (let key in this.item) {
					this.item[key].val = ''
				}
			},
			save() {
				let vm = this

				for (let key in vm.item) {
					let field = vm.item[key]
					if (field.required && field.validator) {
						const valid = field.validator(field.val)
						if (!valid) {}
					}
				}
			}
		},
		components:{
			ctext,
			cselect
		},
		computed:{
			disableSaveButton() {
				let vm = this

				for (let key in vm.item) {
					let field = vm.item[key]
					if (field.required && field.validator) {
						const valid = field.validator(field.val)
						if (!valid) return true
					}
				}

				return false
			},
			breadcrumb() {
				return [{ text:`${ this.$root.upper(this.module) }`,href:`#/settings/${this.module }`},{ text:`Add ${ this.edit_route }`,active:true }]
			}
		},
		beforeRouteEnter(to,from,next) {
			return next(vm => {
				
			})
		},
		mounted() {
			let vm = this
		}
	}
</script>