(function() {
  "use strict";

  angular.module('productApp')
    .factory('productService', function() {

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
      // Get product
      service.getProducts = function() {
        return database.ref('products/').once('value').then(function(snapshot) {
          return snapshot.val();
        });
      };
      // save tweets
      service.saveProductTweets = function(product) {
        return database.ref('tweets/').push(product);
      };

      // get tweets
      service.getTweets = function() {
        return database.ref('tweets/').once('value').then(function(snapshot) {
          console.log(snapshot.val())
          return snapshot.val();
        });
      };

      return service;
    });
})();