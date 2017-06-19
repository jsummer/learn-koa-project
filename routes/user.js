const router = require('koa-router')()

router.post('/api/login', function (ctx, next) {
  let data = ctx.request.body
  return User.login(data)
    .then((user) => {
      let res = {}
      ctx.response.type = 'application/json'
      if (user) {
        res.data = user
        res.meta = {
          success: true,
          message: '登录成功'
        }
      } else {
        res.meta = {
          success: false,
          message: '用户名/密码错误'
        }
      }
      ctx.response.body = res
      return next()
    })
})

router.get('/api/user', function (ctx, next) {
  let params = ctx.query
  return User.list()
    .then((users) => {
      ctx.response.type = 'application/json'
      ctx.response.body = users
      return next()
    })
})

export 