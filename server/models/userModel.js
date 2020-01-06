const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: String,
  lastName: String,
  userType: {
    type: String,
    enum: ['USER', 'ADMIN'],
    default: 'USER'
  }
})

const user = mongoose.model('user', userSchema)

module.exports = user
