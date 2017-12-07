module.exports = function ( moduleApp ){
    moduleApp.directive('iframeJs', frameJs );
       
    function frameJs () {
        function link( scope, element, attrs, ngModel ) {
            attrs.$observe('ngModel', function( value ){ 
                scope.$watch( value, function( newValue ){ 
                    var script = '<script type="text/javascript">' + newValue + '</script>',
                        scriptIfrmae = angular.element('#iframeResult').contents().find('body'),
                        success = JSHINT(newValue);

                    if( success ) {
                        scriptIfrmae.find("script:not([src])").remove();
                        scriptIfrmae.append(script); 
                    }
                    
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