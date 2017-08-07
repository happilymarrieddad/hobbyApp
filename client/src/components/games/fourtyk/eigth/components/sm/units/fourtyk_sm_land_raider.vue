
<template lang='pug'>
	div
		span Land Raider
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-land-raider',
		data() {
			return {
				unit_type_id:74
			}
		}
	}
</script>
			