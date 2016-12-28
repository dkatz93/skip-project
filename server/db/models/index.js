const db = require('./db');

const Place = require('./place');
const Bar = require('./bar');
const Users = require('./users');
const Favorite = require('./favorite')

Bar.belongsTo(Place);
Users.belongsToMany(Bar, {through: Favorite})
Bar.belongsToMany(Users, {through: Favorite})


module.exports = {
	Place: Place,
	Bar: Bar,
	Users: Users,
	db:db,
	Favorite: Favorite
};