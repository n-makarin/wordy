<template>
  <div class="form-item-input">
    <input
      v-model="localValue"
      :id="id"
      :type="type"
      :min="range.min"
      :max="range.max"
      :placeholder="placeholder"
      @keydown="$emit('keydown', localValue)"
      @keyup="$emit('keyup', localValue)"
    >
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
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    range: {
      type: Object,
      default: () => {
        return {
          min: '',
          max: ''
        }
      }
    }
  },
  data () {
    return {
      localValue: this.value
    }
  },
  watch: {
    localValue (newValue) {
      this.$emit('update', newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
