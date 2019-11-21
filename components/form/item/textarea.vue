<template>
  <div class="form-item-textarea">
    <textarea
      v-model="localValue"
      :id="id"
      :cols="cols"
      :rows="rows"
      :min="min"
      :max="max"
      :placeholder="placeholder"
      @keydown="$emit('keydown', localValue)"
      @keyup="$emit('keyup', localValue)"
    />
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
    },
    cols: {
      type: null,
      default: ''
    },
    rows: {
      type: null,
      default: ''
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
