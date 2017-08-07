
<template lang='pug'>
	div
		span Stormtalon Gunship
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-stormtalon-gunship',
		data() {
			return {
				unit_type_id:84
			}
		}
	}
</script>
			