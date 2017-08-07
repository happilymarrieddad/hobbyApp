
<template lang='pug'>
	div
		span Terminator Assault Squad
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-terminator-assault-squad',
		data() {
			return {
				unit_type_id:48
			}
		}
	}
</script>
			