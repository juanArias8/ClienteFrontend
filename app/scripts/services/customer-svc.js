'use strict';

angular.module('customerServices', ['ngResource'])
        .factory('customerSvc', ['$resource', function ($resource) {
                return $resource(
                        'http://localhost:8080/ClienteBackend/webresources/com.edu.udea.clientebackend.entity.cliente/:customerId:id', 
                        {}, {update: {method: 'PUT', params: {id:'@customerId'}}}
                );
            }]

);
