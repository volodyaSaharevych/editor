module.exports = function ( moduleApp ) {
    moduleApp.directive('iframeEdit', _frame );

    function _frame ( $window, $parse ) {
        return {
            restrict : "A",
            require  : '?ngModel',
            link     : function(scope, element, attrs, ngModelCtrl) {
                var getter, setter;
                if (ngModelCtrl) {
                    getter = $parse(attrs['ngModel']);
                    setter = getter.assign;
                    ngModelCtrl.$formatters.push( function ( modelValue ) {
                        return element[0].contentWindow.postMessage(modelValue, "*");
                    });
                    return angular.element( $window ).on('message', function(event) {
                        return scope.$apply(function() {
                            return setter(scope, event.data);
                        });
                    });
                
                }
            }
        }
    }
};