'use strict';

angular.module('customerApp',['ui.router','ngResource','customerApp.controllers','customerApp.services']);

angular.module('customerApp').config(function($stateProvider,$httpProvider){
    $stateProvider
    .state('main',{
       url:'/main',
       templateUrl:'views/main.html',
       controller:'MainCtrl'
    }).state('customers',{
        url:'/customers',
        templateUrl:'views/customers.html',
        controller:'CustomerListController'
    }).state('viewCustomer',{
       url:'/customers/:id/view',
       templateUrl:'views/customer-view.html',
       controller:'CustomerViewController'
    }).state('newCustomer',{
        url:'/customers/new',
        templateUrl:'views/customer-add.html',
        controller:'CustomerCreateController'
    }).state('editCustomer',{
        url:'/customers/:id/edit',
        templateUrl:'views/customer-edit.html',
        controller:'CustomerEditController'
    });
}).run(function($state){
   $state.go('main');
});