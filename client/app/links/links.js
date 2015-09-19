angular.module('shortly.links', ['ngAnimate'])

.controller('LinksController', function ($http, $scope, Links) {
  // Your code here
  $scope.data = {};

  $scope.data.links = [];

  $scope.getLinks = function () {
    Links.getLinks()
      .then(function (links) {
        $scope.data.links = links;
      });
  };
  $scope.getLinks();
});
