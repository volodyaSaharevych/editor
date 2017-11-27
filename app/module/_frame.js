module.exports = function ( moduleApp ) {
  var frame = angular.module( 'FrameApp', [] );
  frame.directive('childFrame', function($window, $parse) {
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
          var getter, setter;
          getter = $parse(attrs['ngModel']);
          setter = getter.assign;
          ngModelCtrl.$formatters.push(function(modelValue) {
            return parent.postMessage(modelValue, "*");
          });
          return angular.element($window).on('message', function(event) {
            return scope.$apply(function() {
              return setter(scope, event.data);
            });
          });
        }
      };
    })
};