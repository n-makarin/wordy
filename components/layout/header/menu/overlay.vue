<template>
  <div :class="classList" :style="styleList" />
</template>

<script>

export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classList () {
      const main = 'overlay'
      const visible = '_visible'
      return [
        main,
        {
          [main + visible]: this.visible
        }
      ]
    },
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
.overlay {
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.377);
  z-index: 1000;
}
</style>
