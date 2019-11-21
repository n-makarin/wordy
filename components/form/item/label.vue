<template>
  <div class="form-item-label">
    <label
      :class="className"
      :for="id"
    >
      {{ value }}
    </label>
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className () {
      const main = 'form-item__label'
      const modifier = {
        required: '_required'
      }
      return {
        main,
        [main + modifier.required]: this.required
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
