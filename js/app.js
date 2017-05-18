angular.module('crStrategyApp', ['ngRoute', 'routeControllers']);
 
angular.module('crStrategyApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
    })
    .when('/news', {
        templateUrl: 'templates/news.html',
        controller: 'newsController'
    })
    .when('/decks', {
    	templateUrl: 'templates/decks.html',
        controller: 'decksController'
    })
    .when('/form', {
        templateUrl: 'templates/form.html',
        controller: 'formController'
    })
    .when('/arenas', {
        templateUrl: 'templates/arenas.html',
        controller: 'arenasController'
    });
});