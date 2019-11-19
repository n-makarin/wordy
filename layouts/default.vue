<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/layout/header.vue'

export default {
  components: {
    Header
  },
  middleware: 'auth'
}
</script>

<style>

</style>
