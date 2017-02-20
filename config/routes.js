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

  /**
   * Render the HelloWorld view
   */
  {
    method: 'GET',
    path: '/',
    handler: 'ViewController.helloWorld'
  },

  //Serving Static Files css, img, html
  {
    method: 'GET',
    path: '/public/',

    handler: {
      directory: {
      path: path.resolve(__dirname, '..', 'public'),
      index:true,
      listing: true,
      redirectToSlash:true
      }
     

    }
  },

  //Serving static files js file (controller)
  {
    method: 'GET',
    path: '/api/controllers/',

    handler: {
      directory: {
      path: path.resolve(__dirname, '..', 'api/controllers/'),
      index:true,
      listing: true,
      redirectToSlash:true
      }
     

    }
  },



  /**
   * Constrain the DefaultController.info handler to accept only GET requests.
   */
  {
    method: [ 'GET' ],
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  }
]
