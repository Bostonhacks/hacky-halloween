const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

module.exports = function (passport) {
  passport.use('signup', new LocalStrategy(function (username, password, done) {
    User.findOne({ 'username': username }, function (err, user) {
      if (err) { return done(err) }
      if (user || password.length < 6) { return done(null, false) }
      
      let newUser = new User()
      newUser.username = username
      newUser.password = newUser.generateHash(password)

      newUser.save(function (err) {
        if (err) {
          return done(err)
        } else {
          return done(null, newUser)          
        }
      })
    })
  }))

  passport.use('login', new LocalStrategy(function (username, password, done) {
    User.findOne({ 'username': username }, function(err, user) {
      if (err) { 
        console.log(err)
        return done(err) 
      }
      if (user && user.validPassword(password)) { return done(null, user) }

      return done(null, false)
    })
  }))

  // "Why do we need these two functions?" -> https://github.com/jaredhanson/passport#sessions
  passport.serializeUser( function (user, done)  {
    done(null, user.id) 
  })

  passport.deserializeUser( function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user)
    })
  })
}