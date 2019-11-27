export const maxAge = {
  month: 60 * 60 * 24 * 30
}

export const cookies = {
  authUser: {
    name: 'authUser',
    maxAge: maxAge.month
  },
  locale: {
    name: 'locale',
    maxAge: maxAge.month
  }
}
