(function() {
  "use strict";

  angular.module('productApp')
    .controller('productCtrl', function($scope, productService) {

      // productService.populateDB();
      productService.getProducts()
        .then(products => {
          $scope.$apply(() => {
            $scope.products = products;
          });
        });

    });
})();