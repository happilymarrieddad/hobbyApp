
<template lang='pug'>
	div
		span Primaris Captain
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-primaris-captain',
		data() {
			return {
				unit_type_id:20
			}
		}
	}
</script>
			