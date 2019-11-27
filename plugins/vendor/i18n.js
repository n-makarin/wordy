import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { cookies } from '~/utils/cookies/config'
import localeConfig from '~/locale/config.js'

Vue.use(VueI18n)

/**
 * Set i18n instance on app.
 * This way we can use it in middleware and pages asyncData/fetch
 */
export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: app.$cookies.get(cookies.locale.name),
    fallbackLocale: localeConfig.default,
    messages: {
      'en': require('~/locale/en.js'),
      'ru': require('~/locale/ru.js')
    }
  })
}
