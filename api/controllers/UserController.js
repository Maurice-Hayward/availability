'use strict'

const Controller = require('trails/controller')


/**
 * @module UserController
 * @description Controller for Logged in Users.
 */



const Emailaddresses = require('machinepack-emailaddresses');
const Passwords = require('machinepack-passwords');
const Strings = require('machinepack-strings');
const _ = require('lodash');
const util = require('util');




module.exports = class UserController extends Controller {

	

	create(req, res) {
		const User = this.app.orm['User'];
		console.log('user create ', req.body)
		var model = {
			email: req.body.email,
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			password: req.body.password
		}

		console.log('model ', model)
		User.create(model)
			.exec(function(err, model) {
				if (err) {
					return res.status(400).send("err:" + err.message)
				} else {
					//this.app.orm.User.publishCreate(model.toJSON())
					return res.status(200).json(model)
				}
			})
	}

	signup(req, res) {
		const User = this.app.orm['User'];
		console.log('user signup ', req.body)
			// firstname is required
		if (_.isUndefined(req.body.firstname)) {
			return res.status(400).send('Bad Request: An firstname is required!');
		}
		// lastname is required
		if (_.isUndefined(req.body.lastname)) {
			return res.status(400).send('Bad Request: An lastname is required!');

		}

		// email is required
		if (_.isUndefined(req.body.email)) {
			return res.status(400).send('Bad Request: AN EMAIL is required!');
		}

		// password is required
		if (_.isUndefined(req.body.password)) {
			return res.status(400).send('Bad Request: An PASSWORD is required!');
		}

		// password must be at least 6 characters
		if (req.body.password.length < 6) {
			return res.status(400).send('Bad Request: Password must be at least 6 characters!');
		}
		
			// Determine whether or not the provided string is an email address.
		Emailaddresses.validate({
			string: req.body.email,
		}).exec({
			// An unexpected error occurred.

			error: function(err) {
				res.status(500).send('Server Error: ' + err.message);
			},
			// The provided string is not an email address.
			invalid: function() {
				return res.status(400).send('Bad Request: Doesn\'t look like an email address to me!');
			},
			// OK.
			success: function() {
				// Encrypt the password
				Passwords.encryptPassword({
					password: req.body.password,
				}).exec({

					error: function(err) {
						return res.status(500).send('Server Error: ' + err.message);
					},

					success: function(result) {


						// Build up options
						var model = {
							firstname: req.body.firstname,
							lastname: req.body.lastname,
							email: req.body.email,
							encryptedPassword: result,
						};


			
						User.create(model)
							.exec(function(err, model) {
								if (err) {
									return res.status(400).send("Bad Request: This email is already associated with an account!!")
								} else {
									return res.status(200).json(model)
								}
							})
					}
				});
			}
		});
	}



}