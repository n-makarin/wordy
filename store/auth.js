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
  logout ({ commit }) {
    commit('SET_USER', null)
    this.app.$cookies.remove(cookies.authUser.name)
  }
}

export const getters = {
  authorized: state => state.authorized,
  user: state => state.user
}
