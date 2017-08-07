
<template lang='pug'>
	div
		span Reiver Squad
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-revier-squad',
		data() {
			return {
				unit_type_id:45
			}
		}
	}
</script>
			