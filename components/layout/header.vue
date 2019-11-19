<template>
  <header class="header">
    <auth :authorized="authorized" />
  </header>
</template>

<script>
import Auth from '~/components/layout/header/auth'

export default {
  components: {
    Auth
  },
  computed: {
    authorized () {
      return this.$store.getters['auth/authorized']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
