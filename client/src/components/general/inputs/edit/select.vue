<template lang='pug'>
	b-form-fieldset(:horizontal='true',:label='label',:feedback='feedback',:description='description')
		b-form-select(type='text',:size='size',:textarea='textarea',:disabled='disabled',v-model='currentValue',v-on:focus='focus',v-on:blur='blur',:class='inputClass',:options='options')
</template>

<script>
	import _ from 'lodash'

	let DEFAULT_DEBOUNCE_TIMEOUT = 100
	let DEFAULT_READY_OFFSET = 200
	let DEFAULT_COLOR_TIMEOUT = 100

	export default {
		props:{
			options:{
				type:Array,
				default:[]
			},
			label:{
				type:String,
				default:''
			},
			description:{
				type:String,
				default:''
			},
			textarea:{
				type:Boolean,
				default:false
			},
			disabled:{
				type:Boolean,
				default:false
			},
			size:{
				type:String,
				default:'sm'
			},
			model:{
				type:[String,Number],
				default:'',
				required:true
			},
			column:{
				type:String,
				default:'',
				required:true
			},
			table:{
				type:String,
				default:''
			}
		},
		data() {
			return {
				currentValue:'',
				initialSet:false,
				ready:false,
				thisUserIsEdittingThisField:false,
				inputClass:{ success:0, error:0 },
				feedback:''
			}
		},
		methods:{
			focus() {
				// Send to server this user is inside this field. Disable it for everyone else.
				let vm = this

				let user_id = vm.$root.user.id
				let column = vm.column
				let table = vm.table

				this.thisUserIsEdittingThisField = true
			},
			blur() {
				// Send to server this user is done with this field. Enable it for everyone else.
				let vm = this

				let user_id = vm.$root.user.id
				let column = vm.column
				let table = vm.table

				this.thisUserIsEdittingThisField = false
			}
		},
		watch:{
			model(val,oldVal) {
				let vm = this
				if (!vm.initialSet) {
					vm.currentValue = vm.model
					vm.initialSet = true
				}
			},
			// Don't use lambda here. You will break the "this" declaration
			currentValue:_.debounce(function(val,oldVal) {
				let vm = this

				if (vm.initialSet && vm.ready) {
					vm.ready = false

					let id = vm.$root.user.id
					let column = vm.column
					let table = vm.table

					let put = {}
					put[column] = val

					let data = { id,put,table,path:`${table}/update` }

					vm.$store.dispatch(`request`,data)
						.then(res => {
							vm.ready = true

							vm.inputClass.success = 1
							setTimeout(() => vm.inputClass.success = 0,DEFAULT_COLOR_TIMEOUT)
						})
						.catch(err => {
							vm.ready = true

							vm.currentValue = oldVal
							vm.inputClass.error = 1
							vm.feedback = err.message
							setTimeout(() => vm.inputClass.error = 0,DEFAULT_COLOR_TIMEOUT)
						})

				}
			},DEFAULT_DEBOUNCE_TIMEOUT)
		},
		computed:{
			isDisabled() {
				return !this.thisUserIsEdittingThisField && this.disabled
			}
		},
		mounted() {
			let vm = this

			setTimeout(() => {
				vm.ready = true
			},DEFAULT_DEBOUNCE_TIMEOUT + DEFAULT_READY_OFFSET)
		}
	}
</script>

<style>
	.success {
		background-color: #00ff00 !important;
	}

	.error {
		background-color: #ff1a1a !important;
	}
</style>