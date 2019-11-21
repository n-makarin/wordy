<template>
  <form
    @submit.prevent="$emit('submit')"
    class="form-default"
  >
    <form-item
      v-for="item in fieldList"
      :key="item.id"

      :value="item.value"
      :label="item.label"
      :field="item.field"
      :id="item.id"
      :required="item.required"
      :type="item.type"
      :placeholder="item.placeholder"
      :range="item.range"
      :cols="item.cols"
      :rows="item.rows"
      :error="item.error"

      @update="update"
      @keydown="$emit('keydown', item.value)"
      @keyup="$emit('keyup', item.value)"
      class="form-default__item"
    />
    <form-button
      v-for="item in buttonList"
      :key="item.id"
      :type="item.type"
      :value="item.value"
      :onclick="item.onclick"
      class="form-default__button"
    />
  </form>
</template>

<script>
import FormItem from '~/components/form/item'
import FormButton from '~/components/form/button'

export default {
  components: {
    FormItem,
    FormButton
  },
  props: {
    fieldList: {
      type: Array,
      required: true
    },
    buttonList: {
      type: Array,
      required: true
    }
  },
  methods: {
    update (itemId, value) {
      for (let i = 0; i < this.fieldList.length; i++) {
        if (this.fieldList[i].id === itemId) {
          this.fieldList[i].value = value
          this.$emit('update', this.fieldList)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
