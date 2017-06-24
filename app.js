const Koa = require('koa')
const app = new Koa()
var logger = require('koa-logger')
const mongoose = require('mongoose')
// const Router = require('koa-router')
// const router = new Router()
const controller = require('./controller.js')
// const User = require('./lib/user')
const bodyparser = require('koa-bodyparser')()
// const passport = require('passport')
// app.use(passport.initialize())  // 初始化passport模块
app.use(bodyparser)

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/bear')

// router.get('/', function (ctx, next) {
//   console.log(ctx)
//   ctx.response.type = "application/json"
//   ctx.response.body = {name: '111'}
//   return next()
// })

app
  .use(controller())
app.use(logger)
app.listen(3000, function () {
  console.log('Server listening on: ', 3000)
})
