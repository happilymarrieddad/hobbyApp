
<template lang='pug'>
	div
		span Inceptor Squad
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-inceptor-squad',
		data() {
			return {
				unit_type_id:64
			}
		}
	}
</script>
			