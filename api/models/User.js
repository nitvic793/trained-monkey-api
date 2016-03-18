"use strict";

/**
 * User
 * @description :: Model for storing User records
 */

module.exports = {
  schema: true,

  attributes: {
    
    user:{
        type:'string'
    },
    
    questionIds:{
      collection:'Question',
      via:'user'  
    },

    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
