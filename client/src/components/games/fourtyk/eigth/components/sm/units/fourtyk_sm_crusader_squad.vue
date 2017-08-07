
<template lang='pug'>
	div
		span Crusader Squad
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-crusader-squad',
		data() {
			return {
				unit_type_id:34
			}
		}
	}
</script>
			