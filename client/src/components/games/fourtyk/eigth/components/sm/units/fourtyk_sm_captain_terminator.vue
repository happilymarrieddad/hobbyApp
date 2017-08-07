
<template lang='pug'>
	div
		span Captain (Terminator)
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-captain-terminator',
		data() {
			return {
				unit_type_id:16
			}
		}
	}
</script>
			