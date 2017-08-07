
<template lang='pug'>
	div
		span Scout Squad
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-scout-squad',
		data() {
			return {
				unit_type_id:33
			}
		}
	}
</script>
			