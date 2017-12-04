module.exports = function ( moduleApp ){
    moduleApp.directive('iframeHtml', frameHtml );
       
    function frameHtml () {
        function link( scope, element, attrs, ngModel ) {
            attrs.$observe('ngModel', function( value ){ 
                scope.$watch( value, function( newValue ){ 
                });
            });
        }
        return ({
            restrict : 'A',
            require  : 'ngModel',
            link     : link
        });
    }
};