angular.module('ecommerce').controller('componentsCtrl', function($scope, productSrvc){
  //Some dummy product data
  $scope.products = productSrvc.getProducts();
})
