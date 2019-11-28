<template>
  <div class="greeting">
    <h1>Welcome to Wordy!</h1>
    <p>Learn words, create your own word sets, choose appropriate translations, stay free.</p>
    <auth />
  </div>
</template>

<script>
import Auth from '~/components/auth'

export default {
  components: {
    Auth
  }
}
</script>

<style lang="scss" scoped>
</style>
