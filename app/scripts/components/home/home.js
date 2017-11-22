'use strict';
angular.module('angularContactListAppApp.home', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/scripts/components/home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function($scope, $firebaseObject, $location) {
  var contactListRef = firebase.database().ref("contacts");
  var obj = new $firebaseObject(contactListRef);
  contactListRef.on('value', function(snapshot) {
    $scope.contactList = [];
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      var contact = childSnapshot.val();
      contact["id"] = key
      $scope.contactList.push(contact);
    });
  })
});
