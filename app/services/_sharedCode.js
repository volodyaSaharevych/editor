module.exports = function ( moduleApp ) {
    moduleApp.service( 'sharedCode', [ '$rootScope', _sharedCode ]);
    function _sharedCode ( $rootScope ) {
        var scope = $rootScope.$new( true );
    }
};