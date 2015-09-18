angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.error = '';

  $scope.addLink = function () {
    Links.addLink($scope.link.url)
      .then(function (link) {
        $scope.link.url = '';
        $scope.error = '';
      })
      .catch(function (error) {
        $scope.error = error;
      });
  };
});
