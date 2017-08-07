
<template lang='pug'>
	div
		span Dreadnought
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-dreadnought',
		data() {
			return {
				unit_type_id:53
			}
		}
	}
</script>
			