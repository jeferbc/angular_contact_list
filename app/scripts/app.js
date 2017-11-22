'use strict';

/**
 * @ngdoc overview
 * @name angularContactListAppApp
 * @description
 * # angularContactListAppApp
 *
 * Main module of the application.
 */
angular.module('angularContactListAppApp', [
    'ngRoute',
    'angularContactListAppApp.createEditContact',
    'angularContactListAppApp.home',
    'angularContactListAppApp.show',
    'angularContactListAppApp.delete',
    'firebase',
    'angularContactListAppApp.firebase'
  ])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}]);
