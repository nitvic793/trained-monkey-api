"use strict";

/**
 * FinalAnswer
 * @description :: Model for storing FinalAnswer records
 */

module.exports = {
  schema: true,

  attributes: {
    answer:{
        type:'string'
    },
    
    user:{
        model:'User'
    },
    
    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
