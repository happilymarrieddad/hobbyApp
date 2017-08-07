
<template lang='pug'>
	div
		span Cataphractii Terminator Squad
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-cataphractii-terminator-squad',
		data() {
			return {
				unit_type_id:49
			}
		}
	}
</script>
			