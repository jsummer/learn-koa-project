const User = require('../lib/user.js')
const Role = require('../lib/role.js')
const homepage = async (ctx, next) => {
  ctx.response.type = 'application/json'
  ctx.response.body = {
    content: '首页'
  }
}
/**
 * [登录]
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
const login = async (ctx, next) => {
  let params = ctx.request.body
  let user = await User.login(params)
  ctx.response.type = 'application/json'
  let res = {}
  if (user) {
    res.token = user._id
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
}
/**
 * [获取登录用户的详细信息]
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
const info = async (ctx, next) => {
  let token = ctx.request.header.token
  let info = (await User.findUserById(token)).toObject()
  let role = (await Role.findRoleById(info.role._id)).toObject()
  let res = {}
  res.data = {
    id: info._id,
    avatar: info.avatar,
    mobile: info.mobile,
    username: info.username,
    roles: role.routes,
    permissions: role.permissions,
    rolename: role.name,
    roletype: info.roletype
  }
  res.meta = {
    success: true,
    message: '成功'
  }
  ctx.response.type = 'application/json'
  ctx.response.body = res
}

/**
 * [用户列表]
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
const list = async (ctx, next) => {
  let params = ctx.request.query

  let users = await User.list({
    pagesize: +params.pagesize,
    pagenumber: +params.pagenumber
  })
  let count = await User.count()
  let res = {
    data: {},
    meta: {}
  }
  res.data.list = users
  res.data.count = count
  res.meta = {
    success: true,
    message: '成功'
  }
  ctx.response.type = 'application/json'
  ctx.response.body = res
}

/**
 * [创建用户]
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
const create = async (ctx, next) => {
  let data = ctx.request.body
  console.log(data)
  await User.create(data)
  let res = {
    meta: {}
  }
  res.meta.success = true
  res.meta.message = '成功'
  ctx.response.type = "application/json"
  ctx.response.body = res
}

const del = async (ctx, next) => {
  let id = ctx.params.id
  let db = await User.remove(id)
  let res = {
    meta: {}
  }
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
  'GET /api/text': homepage,
  'POST /api/login': login,
  'GET /api/info': info,
  'GET /api/user/list': list,
  'POST /api/user/create': create,
  'DELETE /api/user/:id': del
}