'use strict';

/**
 * @ngdoc function
 * @name poleTechApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the poleTechApp
 */
angular.module('poleTechApp')
  .controller('MainCtrl', function ($scope, $http, Map) {
    
    $scope.currentNavItem = 'page1';
  
    $http({
        method : 'GET',
        url : 'http://test.poletalks.com/websites/getData'
    }).then(function mySucces(response) {
        $scope.data = response.data;
        $scope.stores = response.data.store_admins;
    });
    
    Map.init();
  });
