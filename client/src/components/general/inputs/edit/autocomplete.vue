<template lang='pug'>
	b-form-fieldset
		b-form-input(v-model='currentValue',:class='inputClass',size='sm')
</template>

<script>
	

	export default {
		props:{
			model:{
				type:[String,Number],
				default:'',
				required:true
			}
		},
		data() {
			return {
				currentValue:'',
				initialSet:false,
				ready:false,
				inputClass:{ success:0, error:0 }
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
		},
		mounted() {
			let vm = this
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