var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, mainService) {
 

 	var getQuote = function() {
    $scope.quotes = mainservice.getData();
  }
  
  getQuote();


});
