let Role = require('../models/role.js')

exports.findRoleByType = function (type) {
  return Role.findOne({type: type}, {_id: 0, type: 0})
}

exports.findRole = function () {
  return Role.find()
}