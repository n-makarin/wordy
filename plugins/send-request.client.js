const endpoint = 'http://127.0.0.1:8000'
export default ({ app, store, redirect }, inject) => {
  inject('sendRequest', ({
    method,
    url,
    params,
    data,
    ...options
  }) => {
    const headers = ''
    return app.$axios({
      method,
      url: endpoint + url,
      params,
      data,
      headers,
      ...options
    })
  })
}
