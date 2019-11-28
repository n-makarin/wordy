<template>
  <div class="locale">
    <select v-model="$root.$i18n.locale" @change="setToCookies">
      <option v-for="(lang, i) in langList" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
import { cookies } from '~/utils/cookies/config'
import localeConfig from '~/locale/config.js'

export default {
  computed: {
    langList () {
      const result = []
      localeConfig.list.forEach((element) => {
        result.push(element.id)
      })
      return result
    }
  },
  methods: {
    setToCookies () {
      const locale = this.$root.$i18n.locale
      this.$cookies.set(cookies.locale.name, locale, {
        maxAge: cookies.locale.maxAge
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
