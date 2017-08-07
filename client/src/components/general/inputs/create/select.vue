<template lang='pug'>
	b-form-fieldset(:label='label',:description='description',:feedback='_feedback',:state='state',horizontal)
		b-form-select(v-model='current_value',:state='state',:size='size',:options='options')
</template>

<script>
	
	export default {
		props:{
			size:{
				type:String,
				default:'sm'
			},
			event:{
				type:Object
			},
			validator:{
				type:Function,
				default(val) { return Boolean(true) }
			},
			feedback:{
				type:String,
				default:''
			},
			label:{
				type:String,
				default:''
			},
			field:{
				type:String,
				default:''
			},
			description:{
				type:String,
				default:''
			},
			required:{
				type:Boolean,
				default:Boolean(false)
			},
			options:{
				type:Array,
				default() { return [] }
			},
			val:{
				type:Number,
				required:true
			}
		},
		data() {
			return {
				current_value:0,
				dont_update:false
			}
		},
		watch:{
			val(val) {
				if (!this.dont_update) {
					this.current_value = val
				}
				this.dont_update = false
			},
			current_value(val) {
				this.dont_update = true
				this.$emit('update',this.field,val)
			}
		},
		computed: {
			_feedback() { return this.required ? (this.validator(this.current_value) ? '' : this.feedback) : '' },
			state() { return this.required ? (this.validator(this.current_value) ? 'success' : 'warning') : '' }
		},
		mounted() {
			if (this.event) this.event.on('isvalid',() => Boolean(this.validator(this.current_value) == 'success'))
		}
	}
</script>