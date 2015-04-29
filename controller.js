var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, mainService) {
 

 	$scope.getQuote = function() {
    $scope.quotes = mainService.getData();
  }
  
  $scope.getQuote();


});
