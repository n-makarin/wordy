<template>
  <div :style="styleList" class="content">
    <slot />
  </div>
</template>

<script>

export default {
  props: {
    // headerHeight: {
    //   type: Number,
    //   default: 0
    // }
  },
  data () {
    return {
      headerHeight: 0
    }
  },
  computed: {
    styleList () {
      return {
        top: this.headerHeight + 'px'
      }
    }
  },
  beforeMount () {
    debugger
    this.headerHeight = this.$parent.$parent.$el.offsetHeight
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.content {
  position: fixed;
  right: 0;
  width: 200px;
  height: 100%;
  border-left: 1px solid rgb(182, 182, 182);
}
</style>
