
<template lang='pug'>
	div
		span Captain (Bike)
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-captain-bike',
		data() {
			return {
				unit_type_id:19
			}
		}
	}
</script>
			