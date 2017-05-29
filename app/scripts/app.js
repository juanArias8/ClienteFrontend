'use strict';

/**
 * @ngdoc overview
 * @name clienteFrontendApp
 * @description
 * # clienteFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('clienteFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'customerServices'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/customer-list', {
        templateUrl: 'views/customer-list.html',
        controller: 'CustomerListCtrl',
        controllerAs: 'customerList'
      })
      .when('/customer-detail', {
        templateUrl: 'views/customer-detail.html',
        controller: 'CustomerDetailCtrl',
        controllerAs: 'customerDetail'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
