
<template lang='pug'>
	div
		span Stalker
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-stalker',
		data() {
			return {
				unit_type_id:70
			}
		}
	}
</script>
			