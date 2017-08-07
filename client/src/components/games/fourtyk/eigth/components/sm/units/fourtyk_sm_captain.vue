
<template lang='pug'>
	div
		span Captain
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-captain',
		data() {
			return {
				unit_type_id:18
			}
		}
	}
</script>
			