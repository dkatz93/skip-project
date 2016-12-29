const express = require('express');
const router = express.Router()
const Bar = require('../db/models/').Bar
const Place = require('../db/models/').Place
const db = require('../db/models/')
const Favorite = require('../db/models/').Favorite
const User = require('../db/models/').Users

router.get('/bars', (req, res, next)=>{
  console.log('USERID', req.session)
	return Bar.findAll({ include: [Place, {model: User, where: { id: req.session.userId}}]})
	.then(bars =>{
		res.json(bars)
	})
	.catch(next)
})

router.get('/bars/:barId', (req, res, next)=>{
	return Bar.findOne( { where: {id: req.params.barId}, include: [{model: User, where: {id: req.session.userId}}]})
	.then(bar => res.json(bar))
	.catch(next)
})

router.put('/bars/:barId', (req, res, next)=>{
  return Bar.findOne( { where: {id: req.params.barId}})
  .then(bar => {
    User.findOne({ where: {id: req.session.userId}, include: [{model: Bar, where: {id: req.params.barId}}] })
    .then(user => {
      // console.log('USER', user)
      console.log('user.bars', user.bars)
      console.log('user.bars.favorite', user.bars[0].favorite)
      user.setBars(bar, {through: {favorite: !favorite}})
    })
  })
  .then(bar => res.json(bar))
  .catch(next)
})

router.post('/signup', (req, res, next) => {
  return User.create(req.body)
    .then(user => {
      req.session.userId = user.id
      return user
    })
    .then(user => {
      return User.findOne({where: {id: user.id}})
      .then(user => {
        Bar.findAll().then((bar)=> {
          user.setBars(bar)
        })
      })
    })
    .then(user =>{
      res.json(user)
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

router.get('/logout', (req, res, next) => {
  req.session.destroy((err)=> {
    if(err) console.log(err);
    res.redirect('/login')
  })
})

module.exports = router