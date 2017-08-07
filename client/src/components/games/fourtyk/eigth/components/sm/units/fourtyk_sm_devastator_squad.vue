
<template lang='pug'>
	div
		span Devastator Squad
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-devastator-squad',
		data() {
			return {
				unit_type_id:65
			}
		}
	}
</script>
			