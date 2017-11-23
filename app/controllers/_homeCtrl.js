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
            foldGutter       : true,
            matchTags        : { bothTags : true },
            matchBrackets    : true,
            autoCloseTags    : true,
            gutters          : ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        };
        $scope.config_css = {
            lineNumbers    : true,
            mode           : "css",
            theme          : "material",
            indentWithTabs : false,
            foldGutter     : true,
            gutters        : ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        }
        $scope.config_js = {
            lineNumbers    : true,
            mode           : "javascript",
            theme          : "material",
            indentWithTabs : false,
            matchBrackets  : true,
            foldGutter     : true,
            gutters        : ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        };
        $scope.codemirrorLoaded = function( _editor ) {
            var _doc = _editor.getDoc();
            _editor.setSize( "100%" , 450);
            _editor.setOption('autoRefresh', true);
        };
    }
}