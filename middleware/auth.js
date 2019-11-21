import { cookies } from '~/utils/cookies/config.js'

export default function ({ store, redirect, app }) {
  const auth = new Auth({ store, app })
  auth.init({ store, redirect, app })
}

class Auth {
  constructor ({ store, app }) {
    this.authorized = store.getters['auth/authorized']
    this.path = {
      target: app.context.route.fullPath,
      home: '/',
      login: '/login',
      register: '/register'
    }
  }
  /**
   * Init authorization
   * @returns redirection|void
   */
  init ({ store, app, redirect }) {
    if (!this.authorized) {
      this.setUserFromCookies({ store, app })
    }
    this.redirectTo(redirect, this.path.login)
    this.redirectTo(redirect, this.path.home)
  }

  /**
   * Try to get user from cookies
   * @returns void
   */
  setUserFromCookies ({ store, app }) {
    const userFromCookies = app.$cookies.get(cookies.authUser.name)
    if (userFromCookies) {
      store.commit('auth/SET_USER', userFromCookies)
      store.dispatch('auth/prolongAuth', userFromCookies)
      this.authorized = true
    }
  }
  /**
   * Redirect to specified path if this is required
   * @param {function} path Redirection path
   * @param {string} path Redirection path
   * @returns redirection|void
   */
  redirectTo (redirect, path) {
    if (!this.needRedirectTo(path)) { return }
    return redirect(path)
  }
  /**
   * Check is it necessary to redirect to path
   * @param {string} path Redirection path
   * @returns boolean
   */
  needRedirectTo (path) {
    if (path === this.path.login) {
      return this.needRedirectToLogin()
    } else if (path === this.path.home) {
      return this.needRedirectToHome()
    }
    return false
  }
  /**
   * Is it necessary to redirect to login path
   * @returns boolean
   */
  needRedirectToLogin () {
    if (!this.authorized &&
      this.path.target !== this.path.login &&
      this.path.target !== this.path.register &&
      this.path.target !== this.path.home) {
      return true
    }

    return false
  }
  /**
   * Is it necessary to redirect to home path
   * @returns boolean
   */
  needRedirectToHome () {
    // redirect to home page from login or register if authorized
    if (this.authorized &&
      (this.path.target === this.path.login ||
      this.path.target === this.path.register)) {
      return true
    }
    return false
  }
}
