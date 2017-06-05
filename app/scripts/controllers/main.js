'use strict';
angular.module('customerApp.controllers')
        .controller('MainCtrl', function ($scope) {
            $scope.integrantes = [
                {name: 'Juan David Arias'},
                {name: 'Juan Diego Góez'},
                {name: 'Alejandro Castañeda'},
                {name: 'Jesús David Gómez'}
            ];
            $scope.mensaje = {
                titulo: 'LABORATORIO NÚMERO 5',
                area: 'Arquitectura de software',
                universidad: 'Universidad de Antioquia',
                profesor: 'Diego José Luis Botia ',
                descripcion: 'Laboratorio número cinco de la meteria Arquitectura de software.......\n\
                              Se agregan estilos utilizando el Framework Bootstrap en su versión 3.3.7......\n\
                              La lógica del frontend se desarrolla utilizando el framework AngularJs......\n\
                              Los datos se envían y reciben utilizando rest soportado en JSON......'
            };
        });
