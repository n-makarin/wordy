import { cookies } from '~/utils/cookies/config.js'

export const state = () => ({
  authorized: false,
  user: null
})

export const mutations = {
  SET_USER (state, user) {
    state.user = user
  }
}

export const actions = {
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
