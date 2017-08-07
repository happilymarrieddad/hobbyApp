
<template lang='pug'>
	div
		span Tactical Squad
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-tactical-squad',
		data() {
			return {
				unit_type_id:31
			}
		}
	}
</script>
			