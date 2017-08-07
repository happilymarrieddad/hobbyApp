
<template lang='pug'>
	div
		span Rhino
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-rhino',
		data() {
			return {
				unit_type_id:77
			}
		}
	}
</script>
			