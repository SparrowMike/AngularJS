var myControllers = angular.module('myControllers', []);

myControllers.controller("SearchController", 
  function MyController($scope, $http){
    $http.get('js/data.json').then(function(response) {
      $scope.artists = response.data;
      $scope.artistOrder = 'name';
  })
})

myControllers.controller("DetailsController", 
  function MyController($scope, $http){
    $http.get('js/data.json').then(function(response) {
      $scope.artists = response.data;
      $scope.whichItem = 0;
    })
})