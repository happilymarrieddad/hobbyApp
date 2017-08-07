
<template lang='pug'>
	div
		span Terminator Squad
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-terminator-squad',
		data() {
			return {
				unit_type_id:47
			}
		}
	}
</script>
			