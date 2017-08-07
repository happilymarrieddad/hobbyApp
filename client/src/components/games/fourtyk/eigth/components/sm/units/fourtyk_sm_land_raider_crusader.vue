
<template lang='pug'>
	div
		span Land Raider Crusader
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-land-raider-crusader',
		data() {
			return {
				unit_type_id:75
			}
		}
	}
</script>
			