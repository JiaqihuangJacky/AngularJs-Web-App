'use strict';
angular.module('app').controller('postCtrl', ['$http', '$scope', function($http, $scope){
    $scope.tabList = [{
      id: 'all',
      name: 'All'
    }, {
      id:  'pass',
      name: 'Interveiw'
    },{
      id: 'fall',
      name: 'no'
    }]
}]);
