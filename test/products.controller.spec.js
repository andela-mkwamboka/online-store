describe('Test notes controller', () => {
  var $controller;

  // initialize angular app
  beforeEach(() => {
    module('productApp');
    inject((_$controller_) => {
      $controller = _$controller_;
    });
  });

  // It should have a message
  it('Have a data in the scope', () => {
    var $scope = {};

    var controller = $controller('productCtrl', { $scope, $scope });
    expect($scope.products).toBeDefined();
    expect($scope.tweets).toBeDefined();
  });
});