<template>
  <div class="form-item">
    <!-- label -->
    <Label
      v-if="label"
      :value="label"
      :id="id"
      :required="required"
    />
    <!-- input -->
    <Input
      v-if="input"
      :value="localValue"
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :range="range"
      @update="update"
      @keydown="$emit('keydown', localValue)"
      @keyup="$emit('keyup', localValue)"
    />
    <!-- textarea -->
    <Textarea
      v-if="textarea"
      :value="localValue"
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :range="range"
      :cols="cols"
      :rows="rows"
      @update="update"
      @keydown="$emit('keydown', localValue)"
      @keyup="$emit('keyup', localValue)"
    />
    <!-- error -->
    <error :error="error" />
  </div>
</template>

<script>
import Label from '~/components/form/item/label'
import Input from '~/components/form/item/input'
import Textarea from '~/components/form/item/textarea'
import Error from '~/components/form/item/error'

export default {
  components: {
    Label,
    Input,
    Textarea,
    Error
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    field: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
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
    },
    error: {
      type: Object,
      default: () => {
        return {
          visible: false,
          message: ''
        }
      }
    }
  },
  data () {
    return {
      localValue: this.value
    }
  },
  computed: {
    input () {
      return this.field === 'input'
    },
    textarea () {
      return this.field === 'textarea'
    }
  },
  watch: {
    localValue (newValue) {
      this.$emit('update', this.id, newValue)
    }
  },
  methods: {
    update (value) {
      this.localValue = value
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
