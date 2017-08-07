<template lang='pug'>
	div
		b-breadcrumb(:items='items')

		div.row
			//- Shipping Summary
			div.col-md-6
			//- Active Orders
			div.col-md-6

		div.row
			//- Total Loads Per Month
			div.col-md-12

</template>

<script>
	

	export default {
		name: 'dashboard',
		data() {
			return {
				items:[{ text:`Dashboard`}]
			}
		},
		mounted() {
			let vm = this
		}
	}
</script>