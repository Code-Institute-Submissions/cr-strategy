angular.module('crStrategyApp', ['ngRoute', 'routeControllers']);
 
angular.module('crStrategyApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html'
    })
    .when('/news', {
        templateUrl: 'templates/news.html'
    })
    .when('/decks', {
    	templateUrl: 'templates/decks.html'
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