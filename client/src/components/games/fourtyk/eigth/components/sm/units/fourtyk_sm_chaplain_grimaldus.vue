
<template lang='pug'>
	div
		span Chaplain Grimaldus
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-chaplain-grimaldus',
		data() {
			return {
				unit_type_id:11
			}
		}
	}
</script>
			