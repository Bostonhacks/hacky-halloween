const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  challenge1: { type: Boolean, default: false },
  challenge2: { type: Boolean, default: false },
  challenge3: { type: Boolean, default: false },
  challenge4: { type: Boolean, default: false },
  challenge5: { type: Boolean, default: false },
  challenge6: { type: Boolean, default: false },
  challenge7: { type: Boolean, default: false }
})

userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password)
}

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', userSchema)
