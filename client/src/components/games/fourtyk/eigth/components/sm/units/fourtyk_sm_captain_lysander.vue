
<template lang='pug'>
	div
		span Captain Lysander
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-captain-lysander',
		data() {
			return {
				unit_type_id:7
			}
		}
	}
</script>
			