angular.module('ecommerce', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
      templateUrl:'app/views/home/home.html',

    }).state('components', {
      url:'/components',
      templateUrl:'app/views/components/components.html',
      controller:'componentsCtrl'
    }).state('products', {
      url:'/products',
      templateUrl:'app/views/components/components.html',
      // controller:'productsCtrl'
    })

    $urlRouterProvider.otherwise('/components');
  })
