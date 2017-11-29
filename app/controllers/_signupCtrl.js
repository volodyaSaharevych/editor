module.exports = function ( moduleApp ) {
    moduleApp.controller('SignupCtrl', signupCtrl );
        function signupCtrl ( $scope, $location ) {}
        signupCtrl.$inject = [ '$scope','$location' ];
}