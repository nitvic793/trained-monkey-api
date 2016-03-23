"use strict";

/**
 * QuestionController
 * @description :: Server-side logic for ...
 */

module.exports = {
  index(req, res) {
    res.ok();
  },  
  clear(req,res){
      var userId = req.param('id');
      Question.update({user:userId}, {answered:false, answer:null})
      .exec(function(err,update){
          if(!err){
              Answer.destroy({user:userId})
              .exec(function(err){
                  if(!err){
                      FinalAnswer.update({user:userId}, {answered:false})
                      .exec(function(err,updated){
                          if(!err){
                              return res.ok();  
                          }
                      });
                  }
                  else{
                      res.serverError();
                  }
              });
          }
          else{
              res.serverError();
          }
          
      });
      return     
  }
};
