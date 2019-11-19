<template>
  <div class="index">
    <home v-if="authorized" />
    <greeting v-else />
  </div>
</template>

<script>
import Greeting from '~/components/layout/greeting'
import Home from '~/components/layout/home'

export default {
  components: {
    Greeting,
    Home
  },
  computed: {
  },
  asyncData (context) {
    const authorized = context.store.getters['auth/authorized']
    return {
      authorized
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
