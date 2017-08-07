<template lang='pug'>
	div
		b-breadcrumb(:items='items')

		div.row
			div.col-sm-1
			div.col-sm-3
				slot
			div.col-sm-1
			div.col-sm-6
				slot(name='tabs')
			div.col-sm-1
</template>

<script>

	
	export default {
		props:['items'],
		data() {
			return {

			}
		}
	}
</script>