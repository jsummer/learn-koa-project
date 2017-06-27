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

const create = async (ctx, next) => {
  let data = ctx.request.body
  let result = await Role.create(data)
  let res = {
    meta: {}
  }
  res.meta.success = true
  res.meta.message = '成功'
  ctx.response.type ="application/json"
  ctx.response.body = res
}

const del = async (ctx, next) => {
  let id = ctx.params.id
  let db = await Role.remove(id)
  let res = {
    meta: {}
  }
  console.log(db)
  if (db.result.n > 0) {
    res.meta.success = true
    res.meta.message = '删除成功'
  } else {
    res.meta.success = false
    res.meta.message = '删除失败，没有该记录'
  }
  ctx.response.type = 'application/json'
  ctx.response.body = res
}

module.exports = {
  'GET /api/role/list': list,
  'POST /api/role/create': create,
  'DELETE /api/role/:id': del
}