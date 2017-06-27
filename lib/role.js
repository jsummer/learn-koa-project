let Role = require('../models/role.js')

exports.findRoleById = function (id) {
  return Role.findOne({_id: id}, {_id: 0, type: 0})
}

exports.findRole = function () {
  return Role.find()
}

exports.create = function (data) {
  return Role.create(data)
}

exports.remove = function (id = null) {
  if (id || id === 0) {
    return Role.remove({_id: id, name: {$not: /admin/}})
  } else {
    return Role.remove()
  }
}
