// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('map', {
    url: '/map',
    templateUrl: 'templates/maps.html',
    controller: 'MapCtrl'
  });

  $urlRouterProvider.otherwise("/map");

})

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
//  var options = {timeout: 10000, enableHighAccuracy: true};
  $scope.init = function(){
        var myLatLng = new google.maps.LatLng(13.766396943088147,100.63905715942383);
        var mapOption = {
            center:myLatLng,
            zoom:13,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"),mapOption);
        $scope.map = map;
    };

//  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

//    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

//    var mapOptions = {
//      center: latLng,
//      zoom: 15,
//      mapTypeId: google.maps.MapTypeId.ROADMAP
//    };

  //  $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

//  }, function(error){
//    console.log("Could not get location");
//  });
});
