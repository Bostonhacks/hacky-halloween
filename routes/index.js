const express = require('express')
const router = express.Router()
const passport = require('passport')
const debug = require('debug')('index')

router.get('/', (req, res, next) => {
  if (req.query.potion == process.env.c0) {
    return res.redirect('/create-door')
  } else {
    return res.render('index')
  }
})

router.get('/create-door', (req, res, next) => {
  res.render('login/create-door')
})

router.post('/create-door', passport.authenticate('signup', { failureRedirect: '/login-error' }), (req, res, next) => {
  res.redirect('/doorway')
})

router.get('/doorway', (req, res, next) => {
  res.render('login/door')
})

router.post('/doorway', passport.authenticate('login', { failureRedirect: '/login-error' }), (req, res, next) => {
  res.redirect('/home')
})

router.get('/login-error', (req, res, next) => {
  res.render('login/login-error')
})

router.get('/exit', (req, res, next) => {
  req.logout()
  res.redirect('/')
})

router.get('/home', isLoggedIn, (req, res, next) => {
  res.render('home', {
    set1: set1Complete(req.user),
    set2: set2Complete(req.user)
  })
})

router.get('/redgreenbluesilverorange', isLoggedIn, (req, res, next) => {
  res.render('puzzles/rgbso.pug')
})

router.get('/mbta', isLoggedIn, (req, res, next) => {
  res.redirect('/mbta.pdf')
})

router.post('/redgreenbluesilverorange', isLoggedIn, (req, res, next) => {
  if (req.body.c1.toLowerCase() == process.env.c1) {

  } else {
    res.redirect('/home')
  }
})

router.get('/inthedms', isLoggedIn, (req, res, next) => {
  res.render('puzzles/instagram.pug')
})

router.post('/inthedms', isLoggedIn, (req, res, next) => {
  if (req.body.c2.toLowerCase() == process.env.c2) {
    
  } else {
    res.redirect('/home')
  }
})

router.get('/salem', isLoggedIn, (req, res, next) => {
  res.render('puzzles/imgmagick.pug')
})

router.post('/salem', isLoggedIn, (req, res, next) => {
  if (req.body.c3.toLowerCase() == process.env.c3) {
    
  } else {
    res.redirect('/home')
  }
})

router.get('/whoyougonnacall', isLoggedIn, (req, res, next) => {
  res.render('puzzles/imgmagick.pug')  
})

router.post('/whoyougonnacall', isLoggedIn, (req, res, next) => {
  if (req.body.c4.toLowerCase() == process.env.c4) {
    
  } else {
    res.redirect('/home')
  }
})

router.get('/dentistappointment', isLoggedIn, (req, res, next) => {
  res.render('index')
})

router.post('/dentistappointment', isLoggedIn, (req, res, next) => {
  if (req.body.c5.toLowerCase() == process.env.c5) {
    
  } else {
    res.redirect('/home')
  }
})

router.get('/passthepolyjuice', isLoggedIn, (req, res, next) => {
  res.render('index')
})

router.post('/passthepolyjuice', isLoggedIn, (req, res, next) => {
  if (req.body.c6.toLowerCase() == process.env.c6) {
    
  } else {
    res.redirect('/home')
  }
})

router.get('/lostchild', isLoggedIn, (req, res, next) => {
  res.render('index')
})

router.post('/lostchild', isLoggedIn, (req, res, next) => {
  if (req.body.c7.toLowerCase() == process.env.c7) {
    
  } else {
    res.redirect('/home')
  }
})

function isLoggedIn (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.redirect('/doorway')
  }
}

function set1Complete (user) {
  if (!user) return false
  return user.challenge1 && user.challenge2 && user.challenge3
}

function set2Complete (user) {
  if (!user) return false
  return user.challenge4 && user.challenge5 && user.challenge6
}

module.exports = router
