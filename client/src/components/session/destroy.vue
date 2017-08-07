<template lang='pug'>
	div
		h3.text-center Logging out...
</template>

<script>
	export default {
		beforeRouteEnter(to, from, next) { next(vm => {
			vm.$socket.emit('logout',{}).then(() => location.href = '#/session/create')
		}) },
		beforeRouteLeave(to, from, next) { next() },
		data() {
			return { }
		}
	}
</script>

<style>
</style>