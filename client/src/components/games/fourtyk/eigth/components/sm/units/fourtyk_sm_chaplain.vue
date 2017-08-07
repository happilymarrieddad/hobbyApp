
<template lang='pug'>
	div
		span Chaplain
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-chaplain',
		data() {
			return {
				unit_type_id:26
			}
		}
	}
</script>
			