let User = require('../models/user.js')
exports.create = function (data) {
  return User.create(data)
}

exports.login = function (data) {
  return User.findOne({username: data.username, passwd: data.passwd})
}

exports.list = function () {
  return User.find()
}
