
<template lang='pug'>
	div
		span Sergeant Telion
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-sergeant-telion',
		data() {
			return {
				unit_type_id:6
			}
		}
	}
</script>
			