
<template lang='pug'>
	div
		span Captain Sicarius
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-captain-sicarius',
		data() {
			return {
				unit_type_id:4
			}
		}
	}
</script>
			