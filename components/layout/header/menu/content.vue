<template>
  <div :style="styleList" class="content">
    <slot />
  </div>
</template>

<script>

export default {
  props: {
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      headerHeight: 0,
      offsetTopLocal: 0
    }
  },
  computed: {
    styleList () {
      return {
        top: this.offsetTop + 'px'
      }
    }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid rgb(182, 182, 182);
  z-index: 1010;
  background: white;
}
</style>
