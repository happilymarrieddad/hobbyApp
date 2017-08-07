
<template lang='pug'>
	div
		span The Emperor's Champion
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-emperors-champion',
		data() {
			return {
				unit_type_id:10
			}
		}
	}
</script>
			