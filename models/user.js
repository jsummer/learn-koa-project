const mongoose = require('mongoose')
let Schema = mongoose.Schema

let UserSchema = new Schema({
  username: {
    type: 'String',
    unique: true,
    required: true
  },
  passwd: {
    type: 'String',
    default: '123456',
    required: true
  },
  avatar: {
    type: 'String',
    default: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
  },
  role: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Role'
  },
  // roletype: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Role'
  // },
  mobile: {
    type: 'String'
  },
  token: {
    type: 'String'
  }
})

module.exports = mongoose.model('User', UserSchema)