var app = angular.module("app", ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home', {
			url: "/",
			templateUrl: "./app/routes/home/homeTmpl.html",
			controller: 'homeCtrl',
		})

	$urlRouterProvider.otherwise('/');
	
});
