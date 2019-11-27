import { cookies } from '~/utils/cookies/config'

export default function ({ isHMR, app, store }) {
  // webpack hot module replacement
  if (isHMR) { return }

  // try to get locale from cookies
  let locale = app.$cookies.get(cookies.locale.name)

  // get default locale
  if (!['ru', 'en'].includes(locale)) {
    locale = app.i18n.fallbackLocale
  }

  // set locale to cookies
  app.$cookies.set(cookies.locale.name, locale, {
    maxAge: cookies.locale.maxAge
  })

  // set global app locale
  app.i18n.locale = locale
}
