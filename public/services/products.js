(function() {
  "use strict";

  angular.module('productApp')
    .factory('productService', function($resource) {
      var service = {};
      var database = firebase.database();

      var products = [{
        "name": "book",
        "price": 30
      }, {
        "name": "pen",
        "price": 10
      }, {
        "name": "rubber",
        "price": 20
      }];
      // Populate database
      service.populateDB = function() {
        products.forEach(function(product) {
          database.ref('products/').push(product);
        });
      };

      service.getProducts = function() {
        return database.ref('products/').once('value').then(function(snapshot) {
          return snapshot.val();
        });
      };
      return service;
    });
})();