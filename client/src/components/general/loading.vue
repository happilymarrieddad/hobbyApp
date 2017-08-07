<template lang='pug'>
	div
		div(v-show='show')
			img(src='/static/images/loading.gif',:style='`margin-top:${ margintop }px`',:class='{ "mx-auto":center,"d-block":center }')
		slot(v-show='!show')
</template>

<script>
	
	export default {
		props:{
			show:{
				type:Boolean,
				default:false
			},
			margintop:{
				type:String,
				default:0
			},
			center:{
				type:Boolean,
				default:false
			}
		}
	}
</script>