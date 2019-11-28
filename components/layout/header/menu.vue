<template>
  <div class="menu">
    <locale />
    <auth />
  </div>
</template>

<script>
import Auth from '~/components/layout/header/menu/auth'
import Locale from '~/components/layout/header/menu/locale'

export default {
  components: {
    Auth,
    Locale
  }
}
</script>

<style lang="scss" scoped>

</style>
