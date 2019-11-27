<template>
  <div class="header-auth">
    <div v-if="authorized" class="header-auth__wrapper">
      <nuxt-link
        @click.native="logout"
        to="/"
        class="header-auth__logout"
      >
        {{ logoutTitle }}
      </nuxt-link>
    </div>
    <div v-else class="header-auth__wrapper">
      <nuxt-link
        v-for="link in linkList"
        :key="link.id"
        :to="link.path"
        :class="`header-auth__${link.id}`"
      >
        {{ link.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    authorized: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      logoutTitle: 'logout'
    }
  },
  computed: {
    linkList () {
      return [
        {
          id: 'login',
          title: this.$t('login'),
          path: 'login'
        },
        {
          id: 'register',
          title: this.$t('register'),
          path: 'register'
        }
      ]
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
