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
  roletype: {
    type: 'Number',
    required: true
  },
  mobile: {
    type: 'String'
  },
  token: {
    type: 'String'
  }
})

module.exports = mongoose.model('User', UserSchema)