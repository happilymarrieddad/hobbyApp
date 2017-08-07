
<template lang='pug'>
	div
		span Tartaros Terminator Squad
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-tartaros-terminator-squad',
		data() {
			return {
				unit_type_id:50
			}
		}
	}
</script>
			