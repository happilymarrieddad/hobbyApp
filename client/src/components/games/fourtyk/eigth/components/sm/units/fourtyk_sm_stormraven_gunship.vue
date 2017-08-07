
<template lang='pug'>
	div
		span Stormraven Gunship
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-stormraven-gunship',
		data() {
			return {
				unit_type_id:83
			}
		}
	}
</script>
			