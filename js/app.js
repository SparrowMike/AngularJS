var myApp = angular.module('myApp', []);

myApp.controller("MyController", function MyController($scope, $http){
  $http.get('js/data.json').then(function(response){
    $scope.artistis = response.data;
    $scope.artistOrder = 'name';
  })
})