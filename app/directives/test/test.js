module.exports = function ( moduleApp ) {
    moduleApp.directive('hello', helloFn );
    
        function helloFn () {
            return {
                restrict : 'E',
                scope : {},
                templateUrl : '../../../app/directives/test/test.html',
                controllerAs : 'vm',
                controller : function () {
                    var vm = this;
                    vm.great = 'ANGULAR'; 
                }
            }
        }
}