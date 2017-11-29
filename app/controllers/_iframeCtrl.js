module.exports = function ( moduleApp ) {
    moduleApp.controller('OutPutCtrl', iframeCtrl );
        function iframeCtrl ( $scope ) {}
        iframeCtrl.$inject = [ '$scope' ];
}