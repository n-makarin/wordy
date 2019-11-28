<template>
  <div class="menu">
    <icon-trigger />
    <Content>
      <link-list />
      <locale />
      <auth />
    </Content>
    <overlay />
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
  data () {
    return {
      opened: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
