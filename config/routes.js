/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict'

const path = require('path')

module.exports = [

    /*************************************************************
  * JSON API ENDPOINTS                                         *
  *************************************************************/

  {method: 'POST', path: '/signup', handler: 'UserController.signup'},
  

  /*************************************************************
  * Server Rendered HTML Page Endpoints                        *
  *************************************************************/
  
  {method: 'GET', path: '/', handler: 'PageController.showHomePage'},
  {method: 'GET', path: '/signuploginpage', handler: 'PageController.showSignupLoginPage'},
  {method: 'GET', path: '/profile/:userid/:name', handler: 'PageController.showProfilePage'},

 

    /*************************************************************
  *Static File  Endpoints                        *
  *************************************************************/
  {
    method: 'GET',
    path: '/assets/',

    handler: {
      directory: {
      path: path.resolve(__dirname, '..', 'assets'),
      index:true,
      listing: true,
      redirectToSlash:true
      }
     

    }
  }
]
