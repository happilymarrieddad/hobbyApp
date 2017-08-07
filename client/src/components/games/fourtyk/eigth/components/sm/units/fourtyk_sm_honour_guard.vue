
<template lang='pug'>
	div
		span Honour Guard
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-honour-guard',
		data() {
			return {
				unit_type_id:38
			}
		}
	}
</script>
			