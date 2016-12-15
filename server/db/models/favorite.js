var Sequelize = require('sequelize');
var db = require('./db');

var favoriteSchema = {
	favorite: {
		type: Sequelize.BOOLEAN
	}
}

var Favorite = db.define('favorite', favoriteSchema)

module.exports = Favorite;