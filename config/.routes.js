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
    handler: 'PageController.showHomePage'
  },

  //Serving Static Files css, img, html
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
  },

    {
    method: [ 'GET' ],
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  }




  /**
   * Constrain the DefaultController.info handler to accept only GET requests.
   */
  {
    method: [ 'GET' ],
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  }
]
