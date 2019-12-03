<template>
  <div class="menu">
    <icon-trigger v-model="opened" @change="opened = !opened" />
    <Content
      v-if="opened"
      :offset-top="offsetTop"
      @close="opened = false"
    >
      <link-list />
      <locale />
      <auth />
    </Content>
    <overlay :visible="opened" :offset-top="offsetTop" />
  </div>
</template>

<script>
import IconTrigger from '~/components/layout/header/menu/icon-trigger'
import Content from '~/components/layout/header/menu/content'
import LinkList from '~/components/layout/header/menu/link-list'
import Auth from '~/components/auth'
import Locale from '~/components/layout/header/menu/locale'
import Overlay from '~/components/layout/header/menu/overlay'

export default {
  components: {
    IconTrigger,
    Content,
    LinkList,
    Auth,
    Locale,
    Overlay
  },
  props: {
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      opened: false
    }
  },
  computed: {
    scrollWidth () {
      return this.$store.getters['layout/scrollWidth']
    },
    /**
     * ClassName corresponding browser scroll width
     */
    offsetRightClassName () {
      return `pr${this.scrollWidth}`
    }
  },
  watch: {
    $route (newValue) {
      this.opened = false
    },
    async opened (newValue) {
      const hasScroll = await this.$store.dispatch('layout/hasScroll', 'x')
      if (!hasScroll) { return }
      this.setPageOffset(newValue)
    }
  },
  created () {
    this.setScrollWidth()
  },
  methods: {
    /**
     * Set browser scroll width
     * @returns void
     */
    setScrollWidth () {
      if (this.scrollWidth) { return }
      this.$store.dispatch('layout/setScrollWidth')
    },
    /**
     * Set / remove offset equals browser scroll width
     */
    setPageOffset (newValue) {
      const scrollPrevent = 'scroll-prevent'
      if (newValue) {
        document.body.classList.add(scrollPrevent, this.offsetRightClassName)
      } else {
        document.body.classList.remove(scrollPrevent, this.offsetRightClassName)
      }
    }

  }
}
</script>

<style lang="scss" scoped>

</style>
