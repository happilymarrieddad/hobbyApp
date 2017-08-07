
<template lang='pug'>
	div
		span Predator
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-predator',
		data() {
			return {
				unit_type_id:72
			}
		}
	}
</script>
			