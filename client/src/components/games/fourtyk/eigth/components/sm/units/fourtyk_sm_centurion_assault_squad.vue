
<template lang='pug'>
	div
		span Centurion Assault Squad
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-centurion-assault-squad',
		data() {
			return {
				unit_type_id:58
			}
		}
	}
</script>
			