
<template lang='pug'>
	div
		span Venerable Dreadnought
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-venerable-dreadnought',
		data() {
			return {
				unit_type_id:55
			}
		}
	}
</script>
			