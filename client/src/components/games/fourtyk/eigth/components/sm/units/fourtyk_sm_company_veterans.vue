
<template lang='pug'>
	div
		span Company Veterans
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-company-veterans',
		data() {
			return {
				unit_type_id:42
			}
		}
	}
</script>
			