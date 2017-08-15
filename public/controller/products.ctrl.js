(function() {
  "use strict";

  angular.module('productApp')
    .controller('productCtrl', function($scope, productService) {

      // productService.populateDB();
      // Get products
      productService.getProducts()
        .then(products => {
          $scope.$apply(() => {
            $scope.products = products;
          });
        });

      $scope.tweetProduct = function(product) {
        productService.saveProductTweets(product);
      }

      $scope.toggle = function() {
        $scope.hideProducts = !$scope.hideProducts;
      }
      $scope.getHistory = function() {
        $scope.hideProducts = true;
        productService.getTweets().then(products => {
          $scope.$apply(() => {
            $scope.tweets = products;
          });
        });;
      }
    });
})();