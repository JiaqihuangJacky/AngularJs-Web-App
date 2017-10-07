'use strict';
angular.module('app').controller('meCtrl', ['$http', '$scope', function($http, $scope){
  $http.get('/data/positionList.json').success(function(resp){
    $scope.list = resp;
      console.log(resp);
  });
}]);
