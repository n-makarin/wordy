import { cookies } from '~/utils/cookies/config.js'

export const state = () => ({
})

export const mutations = {
  SET_USER (state, user) {
  }
}

export const actions = {

  async create ({ commit }, { login = null, email = null, password = null }) {
    const payload = { login, email, password }
    await this.app.$sendRequest({
      method: 'POST',
      url: '/user/list',
      data: payload
    })
      .catch((err) => {
        console.log(err)
      })
      .then((response) => {
        if (!response || !response.data || response.data.length === 0) { return }
        const user = response.data
        this.app.store.commit('auth/SET_USER', user)
        this.app.$cookies.set(cookies.authUser.name, user, {
          maxAge: cookies.authUser.maxAge
        })
      })
  }
}

export const getters = {
  authorized: state => state.authorized
}
