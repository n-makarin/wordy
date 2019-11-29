<template>
  <div class="link-list">
    <nuxt-link
      v-for="link in data"
      :key="link.id"
      :to="link.path"
      class="link-list__item"
    >
      {{ link.title }}
    </nuxt-link>
  </div>
</template>

<script>

export default {
  computed: {
    data () {
      return [
        {
          id: 'profile',
          title: this.$t('profile'),
          path: '/profile'
        },
        {
          id: 'settings',
          title: this.$t('settings'),
          path: '/settings'
        },
        {
          id: 'about',
          title: this.$t('about'),
          path: '/about'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.link-list {
  &__item {
    display: block;
  }
}
</style>
