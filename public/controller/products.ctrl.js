(function() {
  "use strict";

  angular.module('productApp')
    .controller('productCtrl', function($scope, productService) {
      $scope.product = productService.populateDB();

    });
})();