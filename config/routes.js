"use strict";

/**
 * Route Mappings
 *
 * Your routes map URLs to views and controllers
 */

module.exports = {
  routes: {
      'GET /search':'SearchController.index',
      'GET /test': 'UserController.find',
      'POST /createUser': 'UserController.create'
  }
};
