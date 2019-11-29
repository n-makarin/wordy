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
  watch: {
    $route (newValue) {
      this.opened = false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
