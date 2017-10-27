const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', (req, res, next) => {
  if (req.query.potion == 'emptyfelixfelicis') {
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

router.get('/redgreenbluesilverorange', (req, res, next) => {
  res.render('puzzles/rgbso.pug')
})

router.post('/redgreenbluesilverorange', (req, res, next) => {
  res.render('index')
})

router.get('/inthedms', (req, res, next) => {
  res.render('index')
})

router.post('/inthedms', (req, res, next) => {
  res.render('index')
})

router.get('/salem', (req, res, next) => {
  res.render('index')
})

router.post('/salem', (req, res, next) => {
  res.render('index')
})

router.get('/circumferenceover2r', (req, res, next) => {
  res.render('index')
})

router.post('/circumferenceover2r', (req, res, next) => {
  res.render('index')
})

router.get('/dentistappointment', (req, res, next) => {
  res.render('index')
})

router.post('/dentistappointment', (req, res, next) => {
  res.render('index')
})

router.get('/passthepolyjuice', (req, res, next) => {
  res.render('index')
})

router.post('/passthepolyjuice', (req, res, next) => {
  res.render('index')
})

router.get('/lostchild', (req, res, next) => {
  res.render('index')
})

router.post('/lostchild', (req, res, next) => {
  res.render('index')
})

router.get('/hackathonshift', (req, res, next) => {
  res.render('index')
})

router.post('/hackathonshift', (req, res, next) => {
  res.render('index')
})

router.get('/winnerwinnerchickendinner', (req, res, next) => {
  res.render('index')
})

function isLoggedIn (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.redirect('/doorway')
  }
}

module.exports = router
