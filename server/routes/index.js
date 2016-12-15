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


// router.post('/login', function (req, res, next) {
//   User.findOne({
//     where: req.body
//   })
//   .then(function (user) {
//     if (!user) {
//       res.sendStatus(401);
//     } else {
//       req.session.userId = user.id;
//       res.sendStatus(204);
//     }
//   })
//   .catch(next);
// });


module.exports = router