var Sequelize = require('sequelize');
var db = require('./db');
const bcrypt = require('bcrypt-nodejs');

var userSchema = {
	name: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING
	},
	password: {
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

var userConfig = {
	instanceMethods: {
	    checkPassword: function(password) {
	      return new Promise((resolve, reject) => {
	        bcrypt.compare(password, this.password, (err, resultingBoolean) => {
	          if(err) { return reject(err); }
	          resolve(resultingBoolean);
	        })
	      });
    },

    hashPassword: function() {
      return new Promise((resolve, reject) => {
        bcrypt.genSalt(4, (err, salt) => {
          if(err) { return reject(err); }
          bcrypt.hash(this.password, salt, null, (err, hash) => {
            if(err) { return reject(err); }
            this.password = hash;
            resolve();
          })
        })
      });
    }
  },
  hooks: {
    beforeCreate: function(user) {
      return user.hashPassword();
    },
    beforeUpdate: function(user) {
      if(!user.changed('password')) { return; }
      return user.hashPassword();
    }
  }
}


const User = db.define('user', userSchema, userConfig)

module.exports = User;