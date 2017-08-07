
<template lang='pug'>
	div
		span Assault Squad
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-assault-squad',
		data() {
			return {
				unit_type_id:60
			}
		}
	}
</script>
			