;(function (){
  
  'use strict';

  angular.module('LikeModule', [])

  .controller('LikeController', ['$scope', function ($scope) {

    $scope.leClicks = [];

    var Count = function (countClicks) {
      this.countClicks = 0;

    };

    $scope.countUp = function () {

      var c = new Count();

      c.countClicks = +1;

      $scope.leClicks.push(c);

    };

    $scope.likesCount = function () {


      if ($scope.leClicks.length === 1) {

        return "Like: " + $scope.leClicks.length;

      } else {

        return "Likes: " + $scope.leClicks.length;
      }

    };

    }]);

}());