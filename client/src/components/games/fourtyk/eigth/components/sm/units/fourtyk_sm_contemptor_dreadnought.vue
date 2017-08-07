
<template lang='pug'>
	div
		span Contemptor Dreadnought
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-contemptor-dreadnought',
		data() {
			return {
				unit_type_id:56
			}
		}
	}
</script>
			