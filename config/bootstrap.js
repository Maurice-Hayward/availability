// config/bootstrap.js

const Emailaddresses = require('machinepack-emailaddresses');
const Passwords = require('machinepack-passwords');
const _ = require('lodash');

module.exports = function(app) {
	const User = app.orm['User'];

	const user1 = {
		firstname : 'maurice',
		lastname : 'hayward',
		password : 'abc123',
		email : 'mauricehayward1@gmail.com',
		_id : "1"
	}

	User.findOne({
		email: user1.email
	}).exec(function(err, foundUser) {
		if (foundUser) {
			console.warn("Sorry but user is already in the db")
			return console.warn(user1)
		}

		Passwords.encryptPassword({
			password: user1.password,
		}).exec({
			// An unexpected error occurred.
			error: function(err) {
				console.warn(err.message);
			},
			// OK.
			success: function(result) {
				delete user1.password;
				user1.encryptedPassword = result;

				User.create(user1).exec(function(err,createdUser){
					if(err) return console.warn(err.message);

					console.log("user add in bootstrap!!")
				})

			},
		});



	})



}