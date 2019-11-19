const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./json-server/db.json')
const middlewares = jsonServer.defaults()
const routes = require('./routes.json')

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes
server.use(jsonServer.rewriter(routes.list))

server.use(router)

server.listen(8000, () => {
  console.log('JSON Server is running')
})