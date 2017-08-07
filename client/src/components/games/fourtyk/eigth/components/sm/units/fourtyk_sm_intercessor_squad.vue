
<template lang='pug'>
	div
		span Intercessor Squad
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-intercessor-squad',
		data() {
			return {
				unit_type_id:32
			}
		}
	}
</script>
			