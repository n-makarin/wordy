<template>
  <header class="header">
    <auth :authorized="authorized" />
    <locale />
  </header>
</template>

<script>
import Auth from '~/components/layout/header/auth'
import Locale from '~/components/layout/header/locale'

export default {
  components: {
    Auth,
    Locale
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
