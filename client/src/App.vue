<template lang='pug'>
  div#app
    div.container-fluid
      div.row
        div.col
          navbar(v-show='$root.authenticated')
          router-view
</template>

<script>
  import navbar from '@/components/navbar/index.vue'

  export default {
    name: 'app',
    components:{ navbar }
  }
</script>

<style>
  body {
    padding:20px;
      margin-top: 60px;
  }
</style>