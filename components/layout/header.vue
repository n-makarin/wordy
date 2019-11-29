<template>
  <header class="header">
    <div :style="{ paddingTop: `${height}px` }" class="header__offset" />
    <div :style="{ height: `${height}px` }" class="header__content">
      <nuxt-link to="sets">
        sets
      </nuxt-link>
      <logo />
      <Menu v-if="authorized" :offset-top="height" />
    </div>
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
  data () {
    return {
    }
  },
  computed: {
    authorized () {
      return this.$store.getters['auth/authorized']
    },
    height () {
      return this.$store.getters['layout/headerHeigh']
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  &__content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid rgb(197, 197, 197);
    padding: 7px 0;
  }
}
</style>
