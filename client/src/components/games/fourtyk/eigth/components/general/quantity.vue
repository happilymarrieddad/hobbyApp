<template lang='pug'>
	div
		b-btn(size='sm',variant='success',:disabled='num >= max',@click='changeValue(1)') Add {{ unit }}
		b-btn(size='sm',variant='danger',:disabled='num <= min',@click='changeValue(-1)') Remove {{ unit }}
</template>

<script>
	

	export default {
		props:['num','max','min','unit'],
		methods:{
			changeValue(val) {
				this.$emit('changeNum',val)
			}
		}
	}
</script>