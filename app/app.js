angular.module('ecommerce', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
  // Setup Addition Routing Here.
  $stateProvider.state('components', {
    url:'/components',
    templateUrl:'app/views/components/components.html',
    controller:'componentsCtrl'
  })

  $urlRouterProvider.otherwise('/components');
});
