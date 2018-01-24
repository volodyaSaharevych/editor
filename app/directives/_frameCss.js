module.exports = function ( moduleApp ) {
    moduleApp.directive('iframeCss', frameCss );

    // function _frame ( $window, $parse ) {
    //     return {
    //         restrict : "A",
    //         require  : '?ngModel',
    //         link     : function(scope, element, attrs, ngModelCtrl) {
    //             var getter, setter;
    //             if (ngModelCtrl) {
    //                 getter = $parse(attrs['ngModel']);
    //                 setter = getter.assign;
    //                 ngModelCtrl.$formatters.push( function ( modelValue ) {
    //                     return element[0].contentWindow.postMessage(modelValue, "*");
    //                 });
    //                 return angular.element( $window ).on('message', function(event) {
    //                     return scope.$apply(function() {
    //                         return setter(scope, event.data);
    //                     });
    //                 });
                
    //             }
    //         }
    //     }
    // }
    
    function frameCss () {
        function link( scope, element, attrs, ngModel ) {
            attrs.$observe('ngModel', function( value ){ 
                scope.$watch( value, function( newValue ){ 
                    var style = '<style type="text/css">' + newValue + '</style>',
                        headIfrmae = angular.element('#iframeResult').contents().find('head');

                    headIfrmae.find('style').remove();
                    headIfrmae.append(style); 
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