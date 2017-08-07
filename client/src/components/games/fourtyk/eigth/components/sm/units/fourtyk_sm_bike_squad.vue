
<template lang='pug'>
	div
		span Bike Squad
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-bike-squad',
		data() {
			return {
				unit_type_id:59
			}
		}
	}
</script>
			