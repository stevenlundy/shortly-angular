angular.module('shortly.shorten', ['ngAnimate'])

.controller('ShortenController', function ($scope, $location, Links) {

  var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

  $scope.link = {};
  $scope.link.url = '';
  $scope.error = '';
  $scope.pending = false;

  $scope.addNewLink = function () {
    console.log($scope.link.url);
    $scope.pending = true;
    Links.addNewLink($scope.link.url)
      .then(function (link) {
        $scope.link.url = '';
        $scope.error = '';
        $location.path('/links');
      })
      .catch(function (error) {
        $scope.error = error;
      });
  };

  $scope.isValidUrl = function () {
    return $scope.link.url.match(rValidUrl);
  };
});
