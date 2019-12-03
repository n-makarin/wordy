export const state = () => ({
  scrollWidth: 0,
  headerHeigh: 35
})

export const mutations = {
  SET_SCROLL_WIDTH (state, width) {
    state.scrollWidth = width
  }
}

export const actions = {
  /**
   * Calculate and set to store browser scroll width
   * @returns void
   */
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
  },
  /**
   * Check is current page has scroll
   * @param {string} axis Axis type, x or y
   * @returns Promise<boolean> | void
   */
  async hasScroll (axis) {
    if (process.server) { return }
    let size
    if (axis === 'x') {
      size = 'Width'
    } else if (axis === 'y') {
      size = 'Height'
    }
    const d = document
    const b = d.body
    const e = d.documentElement
    const c = 'client' + size
    size = 'scroll' + size
    return await /CSS/.test(d.compatMode) ? (e[c] < e[axis]) : (b[c] < b[axis])
  }
}

export const getters = {
  scrollWidth: state => state.scrollWidth,
  headerHeigh: state => state.headerHeigh
}
