export const state = () => ({
  scrollWidth: 0
})

export const mutations = {
  SET_SCROLL_WIDTH (state, width) {
    state.scrollWidth = width
  }
}

export const actions = {
  setScrollWidth ({ commit }) {
    if (process.server) { return }
    const scrollId = 'scroll-identifier'
    const div = document.createElement('div')
    let scrollWidth = 0
    div.id = scrollId

    div.style.overflowY = 'scroll'
    div.style.width = '50px'
    div.style.height = '50px'

    document.body.append(div)
    scrollWidth = div.offsetWidth - div.clientWidth
    div.remove()
    commit('SET_SCROLL_WIDTH', scrollWidth)
  }
}

export const getters = {
  scrollWidth: state => state.scrollWidth
}
