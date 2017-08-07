
<template lang='pug'>
	div
		span Librarian (Terminator)
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-librarian-terminator',
		data() {
			return {
				unit_type_id:24
			}
		}
	}
</script>
			