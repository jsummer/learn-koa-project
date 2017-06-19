const Koa = require('koa')
const app = new Koa()
var logger = require('koa-logger')
const mongoose = require('mongoose')
// const router = require('koa-router')()
const User = require('./lib/user')
const bodyparser = require('koa-bodyparser')()
const passport = require('passport')
app.use(passport.initialize())  // 初始化passport模块
app.use(bodyparser)

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/bear')

router.get('/', function (ctx, next) {
  ctx.response.type = "application/json"
  ctx.response.body = {name: '111'}
  return next()
})

console.log(router.routes())

app
  .use(router.routes())
  .use(router.allowedMethods())
app.use(logger)
app.listen(3000, function () {
  console.log('Server listening on: ', 3000)
})

