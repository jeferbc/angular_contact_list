"use strict";angular.module("angularContactListAppApp",["ngRoute","angularContactListAppApp.createEditContact","angularContactListAppApp.home","angularContactListAppApp.show","angularContactListAppApp.delete","firebase","angularContactListAppApp.firebase"]).config(["$locationProvider","$routeProvider",function(a,b){a.hashPrefix("!"),b.otherwise({redirectTo:"/"})}]),angular.module("angularContactListAppApp.show",[]).config(["$routeProvider",function(a){a.when("/show/:ID",{templateUrl:"/scripts/components/show/showContact.html",controller:"ShowCtrl"})}]).controller("ShowCtrl",["$scope","$location","$firebaseObject","$routeParams",function(a,b,c,d){var e=firebase.database().ref("contacts").child(d.ID);e.on("value",function(b){a.contact=b.val(),a.contact.id=d.ID})}]),angular.module("angularContactListAppApp.firebase",[]).service("firebaseService",["$firebaseObject",function(a){return{createEditContact:function(a,b){var c=firebase.database().ref("contacts");if(void 0===b)var d=c.push();else var d=c.child(b);d.set({name:a.name,email:a.email,mobile:a.mobile,notes:a.notes||""})},deleteContact:function(a){var b=firebase.database().ref("contacts"),c=b.child(a);c.remove()}}}]),angular.module("angularContactListAppApp.createEditContact",[]).config(["$routeProvider",function(a){a.when("/contacts/new",{templateUrl:"/scripts/components/forms/contactForm.html",controller:"EditContactCtrl"}),a.when("/contacts/edit/:ID",{templateUrl:"scripts/components/forms/contactForm.html",controller:"EditContactCtrl"})}]).controller("EditContactCtrl",["$scope","$location","$routeParams","firebaseService",function(a,b,c,d){if(void 0!==c.ID){var e=firebase.database().ref("contacts"),f=e.child(c.ID);f.on("value",function(b){a.contact=b.val()})}a.cancel=function(){b.path("/")},a.createEditContact=function(){d.createEditContact(a.contact,c.ID),b.path("/")}}]),angular.module("angularContactListAppApp.home",[]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"/scripts/components/home/home.html",controller:"HomeCtrl"})}]).controller("HomeCtrl",["$scope","$firebaseObject","$location",function(a,b,c){var d=firebase.database().ref("contacts");new b(d);d.on("value",function(b){a.contactList=[],b.forEach(function(b){var c=b.key,d=b.val();d.id=c,a.contactList.push(d)})})}]),angular.module("angularContactListAppApp.delete",[]).config(["$routeProvider",function(a){a.when("/delete/:ID",{resolve:{load:["$location","$routeParams","firebaseService",function(a,b,c){c.deleteContact(b.ID),a.path("/")}]}})}]),angular.module("angularContactListAppApp").run(["$templateCache",function(a){a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>')}]);