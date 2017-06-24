const Role = require('../lib/role.js')

const list = async (ctx, next) => {
  let roles = await Role.findRole()
  let res = {
    data:{},
    meta: {}
  }
  res.data = roles
  res.meta.success = true
  res.meta.message = '成功'
  ctx.response.type = 'application/json'
  ctx.response.body = res
}

// const create = async (ctx, next) => {
// }

module.exports = {
  'GET /api/role/list': list
}