
<template lang='pug'>
	div
		span Captain (Gravis)
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-captain-gravis',
		data() {
			return {
				unit_type_id:21
			}
		}
	}
</script>
			