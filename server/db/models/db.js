const Sequelize = require('sequelize');
const chalk = require('chalk')
const db = new Sequelize('postgres://localhost:5432/skip', {
	logging: function(msg) {
		console.log('  SQL >> ', chalk.gray(msg), '\n')
	}
});

module.exports = db