
<template lang='pug'>
	div
		span Hunter
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-hunter',
		data() {
			return {
				unit_type_id:69
			}
		}
	}
</script>
			