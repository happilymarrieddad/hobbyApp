
<template lang='pug'>
	div
		span Chaplain (Terminator)
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-chaplain-terminator',
		data() {
			return {
				unit_type_id:25
			}
		}
	}
</script>
			