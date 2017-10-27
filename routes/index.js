var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/login', (req, res, next) => {
  res.render('index')
})

router.post('/login', (req, res, next) => {
  res.render('index')
})

router.get('/logout', (req, res, next) => {
  res.render('index')
})

router.get('/home', (req, res, next) => {
  res.render('index')
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

module.exports = router
