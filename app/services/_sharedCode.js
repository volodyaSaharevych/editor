module.exports = function ( moduleApp ) {
    moduleApp.service( 'sharedCode', _sharedCode );
    function _sharedCode ( $rootScope ) {
        var scope = $rootScope.$new( true );
    }
    _sharedCode.$inject = [ '$rootScope'];
};