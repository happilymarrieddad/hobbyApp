
<template lang='pug'>
	div
		span Vanguard Veteran Squad
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-vanguard-veteran-squad',
		data() {
			return {
				unit_type_id:51
			}
		}
	}
</script>
			