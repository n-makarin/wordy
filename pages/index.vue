<template>
  <div class="index">
    <home v-if="authorized" />
    <greeting v-else />
  </div>
</template>

<script>
import Greeting from '~/components/pages/index/greeting'
import Home from '~/components/pages/index/home'

export default {
  components: {
    Greeting,
    Home
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
