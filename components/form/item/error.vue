<template>
  <div
    v-if="error && error.visible"
    class="form-item-error"
  >
    {{ error.message }}
  </div>
</template>

<script>

export default {
  props: {
    error: {
      type: Object,
      default: () => {
        return {
          visible: false,
          message: ''
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
