
<template lang='pug'>
	div
		span Ironclad Dreadnought
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-ironclad-dreadnought',
		data() {
			return {
				unit_type_id:54
			}
		}
	}
</script>
			