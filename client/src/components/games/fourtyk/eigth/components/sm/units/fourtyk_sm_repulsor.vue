
<template lang='pug'>
	div
		span Repulsor
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-repulsor',
		data() {
			return {
				unit_type_id:81
			}
		}
	}
</script>
			