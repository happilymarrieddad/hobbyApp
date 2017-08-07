
<template lang='pug'>
	div
		span Techmarine
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-techmarine',
		data() {
			return {
				unit_type_id:28
			}
		}
	}
</script>
			