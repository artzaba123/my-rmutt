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
    nickname: String,
    firstnameEN: String,
    lastnameEN: String,
    firstnameTH: String,
    lastnameTH: String,
    email: String,
    facebook: String,
    lineID: String,
    phone: String,
    DOB: Date
  },
  careerInfo: {
    email: String,
    phone: String,
    jobPost: String,
    dapartment: String,
    address: String
  }
})

const user = mongoose.model('user', userSchema)

module.exports = user
