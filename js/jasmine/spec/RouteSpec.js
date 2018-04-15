describe('Testing Routes', function () {

    beforeEach(module('crStrategyApp'));
    
    it('Should use home template for base URL',
    inject(function ($route) {
    
        expect($route.routes['/'].templateUrl).toEqual('templates/home.html');
        
        expect($route.routes['/'].controller).not.toBe('formController');
        expect($route.routes['/'].templateUrl).not.toEqual('templates/form.html');
    
    }));

    it('Should use news template for /news',
    inject(function ($route) {
    
        expect($route.routes['/news'].templateUrl).toEqual('templates/news.html');
        
        expect($route.routes['/news'].controller).not.toBe('formController');
        expect($route.routes['/news'].templateUrl).not.toEqual('templates/form.html');
    
    }));

    it('Should use form template and controller for /form',
    inject(function ($route) {
    
        expect($route.routes['/form'].templateUrl).toEqual('templates/form.html');
        expect($route.routes['/form'].controller).toBe('formController');
        
        expect($route.routes['/form'].controller).not.toBe('arenasController');
        expect($route.routes['/form'].templateUrl).not.toEqual('templates/arenas.html');
    
    }));

    it('Should use arenas template and controller for /arenas',
    inject(function ($route) {
    
        expect($route.routes['/arenas'].templateUrl).toEqual('templates/arenas.html');
        expect($route.routes['/arenas'].controller).toBe('arenasController');
        
        expect($route.routes['/arenas'].controller).not.toBe('formController');
        expect($route.routes['/arenas'].templateUrl).not.toEqual('templates/form.html');
    
    }));

    it('Should use decks template for /decks',
    inject(function ($route) {
    
        expect($route.routes['/decks'].templateUrl).toEqual('templates/decks.html');
        
        expect($route.routes['/decks'].controller).not.toBe('arenasController');
        expect($route.routes['/decks'].templateUrl).not.toEqual('templates/arenas.html');
    
    }));
    
});