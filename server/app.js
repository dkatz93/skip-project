'use strict';

// const { generateImage } = require('random-ascii-image-generator')

const express = require('express')
const app = express()
const session = require('express-session')
const bodyParser = require('body-parser')
const volleyball = require('volleyball')
const router = require('./routes')
const db = require('./db/models/db')
var path = require('path');

// generateImage()

app.use(volleyball)

app.use(session({
	secret: 'ihopethisworks'
}))

app.use(bodyParser.urlencoded({ extended:true})); 
app.use(bodyParser.json());

app.use(function (req, res, next) {
  if (!req.session.counter) req.session.counter = 0;
  console.log('counter', ++req.session.counter);
  console.log('session', req.session);
  next();
});

app.use('/api', router)

app.use(express.static(path.join(__dirname,'..','public')))

app.use(express.static(path.join(__dirname,'..','node_modules/bootstrap/dist')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../browser/index.html'));
});


app.use(function(err, req, res, next) {
  console.log('there was a problem', err);
  res
    .status(err.status || 500) 
    .send(err.message || 'uh-oh.');
})


db.sync()
	.then(function() {
		app.listen(3003, function() {
		  console.log('listening on port 3003');
		});
	})
	.catch(function(err) {
		console.log('there was a problem...', err);
})

module.exports = app