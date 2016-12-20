var Sequelize = require('sequelize');
var db = require('./db');

var favoriteSchema = {
	favorite: {
		type: Sequelize.BOOLEAN,
		defaultValue: false
	}
}

var Favorite = db.define('favorite', favoriteSchema)

module.exports = Favorite;