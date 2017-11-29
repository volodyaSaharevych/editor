module.exports = function ( moduleApp ) {
    moduleApp.controller('HoginCtrl', loginCtrl );
    
        function loginCtrl ( $scope, $location ) {}
        loginCtrl.$inject = [ '$scope','$location' ];
}