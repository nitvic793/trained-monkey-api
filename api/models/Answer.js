"use strict";

/**
 * Answer
 * @description :: Model for storing Answer records
 */

module.exports = {
  schema: true,

  attributes: {
      answer:{
          type:'string'
      },
      question:{
          model:'Question'
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
