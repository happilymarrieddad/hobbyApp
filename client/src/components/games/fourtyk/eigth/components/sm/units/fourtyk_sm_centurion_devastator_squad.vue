
<template lang='pug'>
	div
		span Centurion Devastator Squad
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-centurion-devastator-squad',
		data() {
			return {
				unit_type_id:66
			}
		}
	}
</script>
			