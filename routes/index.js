const express = require('express')
const router = express.Router()
const passport = require('passport')

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
  res.render('home')
})

router.get('/redgreenbluesilverorange', isLoggedIn, (req, res, next) => {
  res.render('puzzles/rgbso.pug')
})

router.post('/redgreenbluesilverorange', isLoggedIn, (req, res, next) => {
  if (req.body.c1.toLowerCase() == process.env.c1) {

  } else {
    res.redirect('/home')
  }
})

router.get('/inthedms', isLoggedIn, (req, res, next) => {
  res.render('index')
})

router.post('/inthedms', isLoggedIn, (req, res, next) => {
  if (req.body.c2.toLowerCase() == process.env.c1) {
    
  } else {
    res.redirect('/home')
  }
})

router.get('/salem', isLoggedIn, (req, res, next) => {
  res.render('index')
})

router.post('/salem', isLoggedIn, (req, res, next) => {
  if (req.body.c3.toLowerCase() == process.env.c1) {
    
  } else {
    res.redirect('/home')
  }
})

router.get('/circumferenceover2r', isLoggedIn, (req, res, next) => {
  res.render('index')
})

router.post('/circumferenceover2r', isLoggedIn, (req, res, next) => {
  if (req.body.c4.toLowerCase() == process.env.c1) {
    
  } else {
    res.redirect('/home')
  }
})

router.get('/dentistappointment', isLoggedIn, (req, res, next) => {
  res.render('index')
})

router.post('/dentistappointment', isLoggedIn, (req, res, next) => {
  if (req.body.c5.toLowerCase() == process.env.c1) {
    
  } else {
    res.redirect('/home')
  }
})

router.get('/passthepolyjuice', isLoggedIn, (req, res, next) => {
  res.render('index')
})

router.post('/passthepolyjuice', isLoggedIn, (req, res, next) => {
  if (req.body.c6.toLowerCase() == process.env.c1) {
    
  } else {
    res.redirect('/home')
  }
})

router.get('/lostchild', isLoggedIn, (req, res, next) => {
  res.render('index')
})

router.post('/lostchild', isLoggedIn, (req, res, next) => {
  if (req.body.c7.toLowerCase() == process.env.c1) {
    
  } else {
    res.redirect('/home')
  }
})

router.get('/hackathonshift', isLoggedIn, (req, res, next) => {
  res.render('index')
})

router.post('/hackathonshift', isLoggedIn, (req, res, next) => {
  if (req.body.c8.toLowerCase() == process.env.c1) {
    
  } else {
    res.redirect('/home')
  }
})

router.get('/winnerwinnerchickendinner', isLoggedIn, (req, res, next) => {
  res.render('index')
})

router.post('/winnerwinnerchickendinner', isLoggedIn, (req, res, next) => {
  if (req.body.c9.toLowerCase() == process.env.c1) {
    
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

function set1Complete (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.redirect('/home')
  }
}

function set2Complete (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.redirect('/home')
  }
}

module.exports = router
