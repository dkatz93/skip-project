const express = require('express');
const router = express.Router()
const Bar = require('../db/models/').Bar
const Place = require('../db/models/').Place
const db = require('../db/models/')
const Favorite = require('../db/models/').Favorite
const User = require('../db/models/').Users

router.get('/bars', (req, res, next)=>{
	return Bar.findAll({ include: [Place]})
	.then(bars =>{
		res.json(bars)
	})
	.catch(next)
})

router.get('/bars/:barId', (req, res, next)=>{
	return Bar.findById(req.params.barId)
	.then(bar => res.json(bar))
	.catch(next)
})

router.get('/:userId/bars', (req, res, next)=>{
	return Bar.findAll({ include: [Place]})
	.then(bars =>{
		res.json(bars)
	})
	.catch(next)
})

router.get('/:userId/bars/:barId', (req, res, next)=>{
	return Bar.findById(req.params.barId)
	.then(bar => res.json(bar))
	.catch(next)
})

router.post('/signup', (req, res, next) => {
  return User.create(req.body)
    .then(user => {
      req.session.userId = user.id
      res.json(user);
    })
    .catch(next);
})

router.post('/login', (req, res, next) => {
  return User.findOne({ where: {
    email: req.body.email
  }})
  .then(user => {
    if(!user) {
      var err = new Error('Unauthorized');
      err.status = 401;
      throw err;
    }
    return Promise.all([
      user.checkPassword(req.body.password),
      user
    ])
  })
  .then(results => {
    const [passwordIsValid, user] = results;
    if(!passwordIsValid) {
      var err = new Error('Unauthorized');
      err.status = 401;
      throw err;
    }
    req.session.userId = user.id;
    console.log('REQ SESSION',req.session)
    res.json(user);
  })
  
  .catch(next)
})

module.exports = router