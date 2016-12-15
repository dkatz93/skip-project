var Sequelize = require('sequelize');
var db = require('./db');

var barSchema = {
	name: {
		type: Sequelize.STRING
	},
	rating: {
		type: Sequelize.INTEGER,
		validate: { min: 1, max: 5 }
	},
	imgURL: {
		type: Sequelize.STRING
	}

}

var Bar = db.define('bar', barSchema)

module.exports = Bar;
