
<template lang='pug'>
	div
		span Lieutenants
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-lieutenants',
		data() {
			return {
				unit_type_id:29
			}
		}
	}
</script>
			