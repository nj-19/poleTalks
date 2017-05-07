'use strict';

/**
 * @ngdoc overview
 * @name poleTechApp
 * @description
 * # poleTechApp
 *
 * Main module of the application.
 */
angular
  .module('poleTechApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial' 

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
