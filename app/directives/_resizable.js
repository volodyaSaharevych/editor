module.exports = function ( moduleApp ) {
    moduleApp.directive( 'resizables', resizable);

    function resizable() {
        return {
            restrict : 'A',
            scope : {},
            link : function ( scope, element, attr ) {
                element.resizable({  direction: 'right' });
            }
        }
    }
};