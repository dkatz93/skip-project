var Sequelize = require('sequelize');
var db = require('./db');

var userSchema = {
	name: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING
	},
	phone: {
		type: Sequelize.STRING
	},
	birthday: {
		type: Sequelize.DATE
	},
	locationSharing: {
		type: Sequelize.BOOLEAN
	},
	address: {
		type: Sequelize.STRING
	}
}


const User = db.define('user', userSchema)

module.exports = User;