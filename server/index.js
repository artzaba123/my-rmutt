const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const mongoose = require('mongoose')
const { ApolloServer } = require('apollo-server-koa')

const app = new Koa()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

const schemas = require('./schemas')
const resolvers = require('./resolvers')

// mongoose model
const userModel = require('./models/userModel')

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: {
    models: {
      userModel
    }
  }
})

server.applyMiddleware({ app })

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })
  mongoose.connect('mongodb://localhost:27017/rmutt', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  const db = mongoose.connection
  db.on('error', () => {
    consola.info('connect error')
  })
  db.once('open', function() {
    consola.success('db connected')
  })
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
