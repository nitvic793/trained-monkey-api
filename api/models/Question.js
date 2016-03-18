"use strict";

/**
 * Question
 * @description :: Model for storing Question records
 */

module.exports = {
  schema: true,

  attributes: {
      
      question:{
          type:'string'
      },
      
      images:{
        type:'array'  
      },
      
      answers:{
          type:'array'
      },
      
      hints:{
          type:'array'
      },
      
      user:{
        model:'User' ,
      },
      
      answered:{
        type:'boolean',
        defaultsTo: 'false'  
      },
      
      order:{
        type:'integer'  
      },
      
      answer:{
          model:'Answer'
      },

    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
