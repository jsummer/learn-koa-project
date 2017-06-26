const mongoose = require('mongoose')
let Schema = mongoose.Schema

let RoleSchema = new Schema({
  name: {
    type: 'String',
    unique: true,
    required: true
  },
  routes: {
    type: ['String'],
    required: true
  },
  permissions: {
    type: ['String'],
    required: true
  }
})

module.exports = mongoose.model('Role', RoleSchema)