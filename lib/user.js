let User = require('../models/user.js')
exports.create = function (data) {
  return User.create(data)
}

exports.login = function (data) {
  return User.findOne({username: data.username, passwd: data.passwd}, {_id: 1})
}

exports.findUserById  = function (id) {
  return User.findOne({_id: id}, {passwd: 0})
  // return User.find({
  //   _id: id
  // }, {
  //   _id: 0,
  //   passwd: 0
  // }).populate({
  //   path: 'roletype'
  // }).exec((err, doc) => {
  //   console.log(doc.roletype)
  // })
}

exports.list = function ({pagesize, pagenumber}) {
  return User.find({}, {passwd: 0})
    .skip(pagesize * (pagenumber - 1))
    .limit(pagesize)
}

exports.count = function () {
  return User.count()
}
