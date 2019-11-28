<template>
  <header class="header">
    <logo />
    <Menu v-if="authorized" />
  </header>
</template>

<script>

import Logo from '~/components/layout/header/logo'
import Menu from '~/components/layout/header/menu'

export default {
  components: {
    Logo,
    Menu
  },
  computed: {
    authorized () {
      return this.$store.getters['auth/authorized']
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid rgb(197, 197, 197);
  padding: 7px 0;
}
</style>
