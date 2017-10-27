const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

module.exports = (passport) => {
  passport.use('signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, (username, password, done) => {
    User.findOne({ 'username': username }, (err, user) => {
      if (err) { return done(err) }
      if (user || password.length < 6) { return done(null, false) }
      
      let newUser = new User()
      newUser.username = username
      newUser.password = newUser.generateHash(password)

      newUser.save((err) => {
        if (err) {
          return done(err)
        } else {
          return done(null, newUser)          
        }
      })
    })
  }))

  passport.use('login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, (username, password, done) => {
    User.findOne({ 'username': username }, (err, user) => {
      if (err) { return done(err) }
      if (user && user.validPassword(password)) { return done(null, user) }

      return done(null, false)
    })
  }))

  // "Why do we need these two functions?" -> https://github.com/jaredhanson/passport#sessions
  passport.serializeUser( (user, done) => {
    done(null, user.id) 
  })

  passport.deserializeUser( (id, done) => {
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })
}