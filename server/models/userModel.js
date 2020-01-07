const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    enum: ['USER', 'ADMIN'],
    default: 'USER'
  },
  isPublic: {
    type: Boolean,
    default: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  personalInfo: {
    firstnameEN: String,
    lastnameEN: String
  }
})

const user = mongoose.model('user', userSchema)

module.exports = user
