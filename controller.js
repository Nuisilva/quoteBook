var app = angular.module('quoteBook');

app.controller('ctrl', function($scope, mainService) {
	
	$scope.removeTxt = ""

    $scope.popQuotes = mainService.getData();
    
    $scope.addQuotes= function(){
   		mainService.addData($scope.text, $scope.author);
    }   
    $scope.removeQuotes = function(){
    	mainService.removeData($scope.removeTxt);
    } 


});
