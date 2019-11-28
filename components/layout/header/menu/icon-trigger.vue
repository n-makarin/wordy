<template>
  <div @click="$emit('change')" class="icon-trigger">
    icon
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
