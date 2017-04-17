'use strict'

const Controller = require('trails/controller')

/**
 * @module PageController
 * @description TODO document Controller.
 */
module.exports = class PageController extends Controller {

	showHomePage(req, res) {
		res.status(200).sendFile(process.cwd() + '/assets/index.html')
	}

	showSignupLoginPage(req, res) {
		res.status(200).sendFile(process.cwd() + '/assets/templates/login_signup.html')
	}

	showProfilePage(req, res) {
		res.status(200).sendFile(process.cwd() + '/assets/templates/profilepage.html')
	}

	

}