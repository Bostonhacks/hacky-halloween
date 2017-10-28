const express = require('express')
const router = express.Router()
const passport = require('passport')
const debug = require('debug')('index')

const User = require('../models/user')

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
  let user = req.user
  res.render('home', {
    challenge1: user.challenge1,
    challenge2: user.challenge2,
    challenge3: user.challenge3,
    challenge4: user.challenge4,
    challenge5: user.challenge5,
    challenge6: user.challenge6,
    challenge7: user.challenge7
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
    User.update({ _id: req.user.id }, { $set: { challenge1: true }}, function (err, result) {
      if (err) { return res.render('/error') }
    })
  }
  return res.redirect('/home')
})

router.get('/inthedms', isLoggedIn, (req, res, next) => {
  res.render('puzzles/instagram.pug')
})

router.post('/inthedms', isLoggedIn, (req, res, next) => {
  if (req.body.c2.toLowerCase() == process.env.c2) {
    User.update({ _id: req.user.id }, { $set: { challenge2: true }}, function (err, result) {
      if (err) { return res.render('/error') }
    })
  }
  return res.redirect('/home')
})

router.get('/salem', isLoggedIn, (req, res, next) => {
  res.render('puzzles/imgmagick.pug')
})

router.post('/salem', isLoggedIn, (req, res, next) => {
  if (req.body.c3.toLowerCase() == process.env.c3) {
    User.update({ _id: req.user.id }, { $set: { challenge3: true }}, function (err, result) {
      if (err) { return res.render('/error') }
    })
  }
  return res.redirect('/home')
})

router.get('/whoyougonnacall', isLoggedIn, (req, res, next) => {
  res.render('puzzles/morsecode.pug')  
})

router.post('/whoyougonnacall', isLoggedIn, (req, res, next) => {
  if (req.body.c4.toLowerCase() == process.env.c4) {
    User.update({ _id: req.user.id }, { $set: { challenge4: true }}, function (err, result) {
      if (err) { return res.render('/error') }
    })
  }
  return res.redirect('/home')
})

router.get('/dentistappointment', isLoggedIn, (req, res, next) => {
  res.render('puzzles/battleship.pug')
})

router.post('/dentistappointment', isLoggedIn, (req, res, next) => {
  if (req.body.c5.toLowerCase() == process.env.c5) {
    User.update({ _id: req.user.id }, { $set: { challenge5: true }}, function (err, result) {
      if (err) { return res.render('/error') }
    })
  }
  return res.redirect('/home')
})

router.get('/passthepolyjuice', isLoggedIn, (req, res, next) => {
  res.render('puzzles/twilio.pug')
})

router.post('/passthepolyjuice', isLoggedIn, (req, res, next) => {
  if (req.body.c6.toLowerCase().replace(/\s/g,'')  == process.env.c6) {
    User.update({ _id: req.user.id }, { $set: { challenge6: true }}, function (err, result) {
      if (err) { return res.render('/error') }
    })
  }
  return res.redirect('/home')
})

router.get('/lostchild', isLoggedIn, (req, res, next) => {
  res.render('puzzles/final')
})

router.post('/lostchild', isLoggedIn, (req, res, next) => {
  if (req.body.c7.toLowerCase() == process.env.c7) {
    User.update({ _id: req.user.id }, { $set: { challenge7: true }}, function (err, result) {
      if (err) { return res.render('/error') }
    })
  }
  return res.redirect('/home')
})

function isLoggedIn (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  } else {
    res.redirect('/doorway')
  }
}

module.exports = router
