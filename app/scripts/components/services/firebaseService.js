'use strict';
angular.module('angularContactListAppApp.firebase', [])

.service('firebaseService', function($firebaseObject){
  return {
    createEditContact: function(contactData, id) {
      var contactListRef = firebase.database().ref("contacts");
      if (id === undefined){
        var contact = contactListRef.push();
      }else{
        var contact = contactListRef.child(id);
      }
      contact.set({
        name: contactData.name,
        email: contactData.email,
        mobile: contactData.mobile,
        notes: contactData.notes || ""
      });
    },
    deleteContact: function(id) {
      var contactRef = firebase.database().ref("contacts");
      var contact = contactRef.child(id);
      contact.remove();
    }
  };
});
