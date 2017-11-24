module.exports = function ( moduleApp ) {
    moduleApp.directive( 'resizables', resizable);

    function resizable() {
        return {
            restrict : 'A',
            scope : {},
            link : function ( scope, element, attr ) {
               element.resizable({ handleSelector: '.resize-handl', resizeHeight: false, direction : 'horizontal'});
            }
        }
    }
};