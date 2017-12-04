module.exports = function ( moduleApp ) {
    moduleApp.config( function( $routeProvider , $locationProvider ) {
        
        $routeProvider
                    .when('/', {
                        templateUrl : './../../views/home.html',
                        controller  : 'HomeCtrl'
                    })
                    .when('/login', {
                        templateUrl : '',
                        controller  : 'LoginCtrl'
                    })
                    .when('/signup', {
                        templateUrl : '',
                        controller  : 'SignupCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });

        $locationProvider.html5Mode( true );

    });
};