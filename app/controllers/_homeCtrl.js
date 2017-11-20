module.exports = function ( moduleApp ) {
    moduleApp.controller('HomeCtrl', homeCtrl );
    
    function homeCtrl ( $scope, $location ){  
        $scope.config_html = {
            mode             : "xml",
            lineNumbers      : true,
            theme            : "material",
            indentWithTabs   : false,
            selectionPointer : true,
            htmlMode         : true,
            matchClosing     : true,
            gutters          : ['CodeMirror-lint-markers']  
        };
        $scope.config_css = {
            lineNumbers    : true,
            mode           : "css",
            theme          : "material",
            indentWithTabs : false,
            gutters        : ['CodeMirror-lint-markers'],
        }
        $scope.config_js = {
            lineNumbers    : true,
            mode           : "javascript",
            theme          : "material",
            indentWithTabs : false,
            matchBrackets  : true,
            gutters        : ['CodeMirror-lint-markers'],
        };
        $scope.codemirrorLoaded = function( _editor ) {
            
            var _doc = _editor.getDoc();
            _editor.setSize( "100%" , 450);

        };

    }
}