'use strict';
//using appHead since html does not care it
angular.module('app').directive('appHead', [function(){
  return {
    restrict: 'A', //return target, using attribute to use the property
    replace: true, //replace the value
    templateUrl: 'view/template/head.html', //tempalte location

  };
}]);
