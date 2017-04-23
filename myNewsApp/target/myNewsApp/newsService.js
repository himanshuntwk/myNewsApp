var services = angular.module('newsService',['ngResource']);

services.factory('NewsServiceFactory',function ($resource){
	return $resource('/hello',{},{
		query: {
			method: 'GET',
			params: {},
			isArray: false
		}
	})
});