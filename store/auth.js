export const state = () => ({
  user: null,
  authorized: false
})

export const mutations = {
  SET_USER (state, user) {
    state.user = user
  }
}

export const actions = {
}

export const getters = {
  user: state => state.user,
  authorized: state => state.authorized
}
