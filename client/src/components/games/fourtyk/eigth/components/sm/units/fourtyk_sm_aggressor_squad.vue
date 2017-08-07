
<template lang='pug'>
	div
		span Aggressor Squad
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-aggressor-squad',
		data() {
			return {
				unit_type_id:46
			}
		}
	}
</script>
			