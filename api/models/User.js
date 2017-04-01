'use strict'

const Model = require('trails/model')

/**
 * @module User
 * @description TODO document Model
 */
module.exports = class User extends Model {

  /*static config () {
    return {
      migrate: 'drop'
    }
  }*/

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

  		encryptedPassword : {
  			type: 'string'
  		}
  	}

  }
}
