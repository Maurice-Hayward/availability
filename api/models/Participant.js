'use strict'

const Model = require('trails/model')

/**
 * @module Participant
 * @description Participant for an User&#39;s Event
 */
module.exports = class Participant extends Model {

  static config () {

  }

  static schema () {

  	return {

  	firstname: {
  			type: 'string'
  		},

  		lastname: {
  			type: 'string',
  		},

  		email : {
  			type : 'string',
  			email: 'true',
        	unique : 'true'
  		},
  		cellphone : {
  			type: 'string',
        	unique : 'true'


  		}
  	}

  }
}
