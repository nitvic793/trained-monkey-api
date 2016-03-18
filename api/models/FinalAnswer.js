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
    hints:{
      type:'array'  
    },
    user:{
        model:'User'
    },
    answered:{
      type:'boolean',
      defaultsTo: 'false' 
    },
    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
