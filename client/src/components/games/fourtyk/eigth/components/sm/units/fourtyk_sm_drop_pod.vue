
<template lang='pug'>
	div
		span Drop Pod
</template>

<script>
	import Factory from '@/components/games/fourtyk/eigth/unit_factory.vue'

	export default {
		extends:Factory,
		name:'fourtyk-sm-drop-pod',
		data() {
			return {
				unit_type_id:79
			}
		}
	}
</script>
			