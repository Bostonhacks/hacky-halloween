const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const userSchema = mongoose.Schema({
  username: String,
  password: String
})

userSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password)
}

userSchema.methods.validPassword = (password) => {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', userSchema)
