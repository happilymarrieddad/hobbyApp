<template lang='pug'>

	b-tabs(small,ref='tabs',v-model='tabIndex')
		slot

		b-tab(title='Comments')
			comment()
		b-tab(title='Documents')
			document()

		slot(name='end')

</template>

<script>
	import CommentFactory from '@/components/general/comments.vue'
	import DocumentFactory from '@/components/general/documents.vue'

	export default {
		props:[],
		data() {
			return {
				tabIndex:0
			}
		},
		components:{
			comment:CommentFactory,
			document:DocumentFactory
		}
	}
</script>

<style>

</style>