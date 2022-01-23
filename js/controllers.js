var myControllers = angular.module('myControllers', []);

myControllers.controller("SearchController", 
  function MyController($scope, $http){
    $http.get('js/data.json').then(function(response) {
      $scope.artistis = response.data;
      $scope.artistOrder = 'name';
  })
})