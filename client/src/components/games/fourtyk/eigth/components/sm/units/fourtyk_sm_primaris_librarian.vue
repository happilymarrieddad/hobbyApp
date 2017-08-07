
<template lang='pug'>
	div
		span Primaris Librarian
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-primaris-librarian',
		data() {
			return {
				unit_type_id:23
			}
		}
	}
</script>
			