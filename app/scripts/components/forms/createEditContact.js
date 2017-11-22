'use strict';

angular.module('angularContactListAppApp.createEditContact', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts/new', {
    templateUrl: '/scripts/components/forms/contactForm.html',
    controller: 'EditContactCtrl'
  });
  $routeProvider.when('/contacts/edit/:ID', {
    templateUrl: '/scripts/components/forms/contactForm.html',
    controller: 'EditContactCtrl'
  });
}])

.controller('EditContactCtrl', function($scope, $location, $routeParams, firebaseService) {
  if ($routeParams.ID !== undefined){
    var contactListRef = firebase.database().ref("contacts");
    var contactRef = contactListRef.child($routeParams.ID);
    contactRef.on('value', function(snapshot){
      $scope.contact = snapshot.val();
    })
  }

  $scope.cancel = function () {
    $location.path('/');
  }

  $scope.createEditContact = function () {
    firebaseService.createEditContact($scope.contact, $routeParams.ID);
    $location.path('/');
  }
});
