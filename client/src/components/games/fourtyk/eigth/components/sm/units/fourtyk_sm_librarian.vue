
<template lang='pug'>
	div
		span Librarian
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-librarian',
		data() {
			return {
				unit_type_id:22
			}
		}
	}
</script>
			