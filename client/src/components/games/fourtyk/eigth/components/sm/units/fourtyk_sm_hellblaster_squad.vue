
<template lang='pug'>
	div
		span Hellblaster Squad
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-hellblaster-squad',
		data() {
			return {
				unit_type_id:67
			}
		}
	}
</script>
			