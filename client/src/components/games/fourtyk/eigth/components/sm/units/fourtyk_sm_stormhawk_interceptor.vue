
<template lang='pug'>
	div
		span Stormhawk Interceptor
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-stormhawk-interceptor',
		data() {
			return {
				unit_type_id:82
			}
		}
	}
</script>
			