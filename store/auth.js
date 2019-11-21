import { cookies } from '~/utils/cookies/config.js'
import { email } from '~/utils/regexp.js'

export const state = () => ({
  authorized: false,
  user: null
})

export const mutations = {
  SET_USER (state, user) {
    state.user = user
    state.authorized = !!user
  }
}

export const actions = {
  /**
   * Try to login and add user to store and cookies
   * @returns void
   */
  async login ({ commit }, { login = null, password = null }) {
    let url = ''
    if (email.test(login)) {
      url = `/login-email/?email=${login}&password=${password}`
    } else {
      url = `/login/?login=${login}&password=${password}`
    }
    await this.app.$sendRequest({
      method: 'GET',
      url
    })
      .catch((err) => {
        console.log(err)
      })
      .then((response) => {
        if (!response || !response.data || response.data.length === 0) { return }
        const user = response.data[0]
        commit('SET_USER', user)
        this.app.$cookies.set(cookies.authUser.name, user, {
          maxAge: cookies.authUser.maxAge
        })
      })
  },
  /**
   * Remove user from store and cookies
   * @returns void
   */
  logout ({ commit }) {
    commit('SET_USER', null)
    this.app.$cookies.remove(cookies.authUser.name)
  },
  /**
   * Prolong autharization when got user from cookies
   * @param {object} user User data
   * @returns void
   */
  prolongAuth ({ commit }, user) {
    this.app.$cookies.set(cookies.authUser.name, user, {
      maxAge: cookies.authUser.maxAge
    })
  }
}

export const getters = {
  authorized: state => state.authorized,
  user: state => state.user
}
