
<template lang='pug'>
	div
		span Apothecary
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-apothecary',
		data() {
			return {
				unit_type_id:40
			}
		}
	}
</script>
			