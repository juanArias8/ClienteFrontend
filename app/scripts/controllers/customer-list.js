'use strict';
angular.module('clienteFrontendApp')
        .controller('CustomerListCtrl', function ($scope,customerSvc) {
            $scope.customers = customerSvc.query();
        });
