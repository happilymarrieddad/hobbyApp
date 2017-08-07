
<template lang='pug'>
	div
		span Sternguard Veteran Squad
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-sternguard-veteran-squad',
		data() {
			return {
				unit_type_id:52
			}
		}
	}
</script>
			