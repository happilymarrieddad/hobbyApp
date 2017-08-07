
<template lang='pug'>
	div
		span Primaris Lieutenants
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-primaris-lieutenants',
		data() {
			return {
				unit_type_id:30
			}
		}
	}
</script>
			