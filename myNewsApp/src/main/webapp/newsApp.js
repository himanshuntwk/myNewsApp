var newsApp = angular.module('newsApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
newsApp.controller('newsController', ['$scope','$http',
	function NewsController($scope,$http) {

$scope.categories={'list':[{'key':'business','value':'Business'},
{'key': 'entertainment','value':'Entertainment'},
{'key': 'gaming','value':'Gaming'},
{'key': 'general','value':'General'},
{'key': 'music','value':'Music'},
{'key': 'science-and-nature','value':'Science And Nature'},
{'key': 'sport','value':'Sports'},
{'key': 'technology','value':'Technology'}]};
  $scope.callAPI = function(){
    $http.get("https://newsapi.org/v1/sources?language=en&category=general")
    .then(function(response){
      //$scope.details = response.sources;
      $scope.sources = response.data.sources;
    });
  };

  $scope.callNewsAPI = function(categoryName){

    if(categoryName == 'home'){
      $scope.sources = {};
      $scope.heading = 'Welcome HIMANSHU!';
    }else{
      $http.get("https://newsapi.org/v1/sources?language=en&language=en&category="+ categoryName)
      .then(function(response){
        //$scope.details = response.sources;
        $scope.heading = categoryName.toUpperCase();
        $scope.sources = response.data.sources;
      });
    }
  }
  
  $scope.callService = function(){
	  $http.get("/hello")
	  .then(function(response){
		  $scope.heading = 'Welcome '+ response.data.name;
	  });
  }


}]);
