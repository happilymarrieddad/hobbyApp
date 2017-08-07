
<template lang='pug'>
	div
		span Sergeant Chronus
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-sergeant-chronus',
		data() {
			return {
				unit_type_id:5
			}
		}
	}
</script>
			