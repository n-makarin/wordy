<template>
  <button
    :type="type || 'submit'"
    @click="click"
    class="form-button"
  >
    {{ value }}
  </button>
</template>

<script>

export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    onclick: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    /**
     * Action may be submit nor reset
     */
    click () {
      return this.onclick ? this.onclick : function () {}
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
