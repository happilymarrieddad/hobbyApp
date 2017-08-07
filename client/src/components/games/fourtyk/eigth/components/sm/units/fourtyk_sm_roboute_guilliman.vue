
<template lang='pug'>
	div
		span Roboute Guilliman
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-roboute-guilliman',
		data() {
			return {
				unit_type_id:85
			}
		}
	}
</script>
			