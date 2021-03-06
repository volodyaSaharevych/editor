module.exports = function ( moduleApp ) {
    moduleApp.controller('HomeCtrl', homeCtrl );
    
    function homeCtrl ( $scope, $location ){  
        $scope.config_html = {
            mode             : "text/html",
            tabMode          : "indent",
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
            lineWrapping     : false,
            gutters          : ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
            lint             : true,
            value            : ''
        };
        $scope.config_css = {
            lineNumbers    : true,
            mode           : "css",
            tabMode        : "indent",
            theme          : "material",
            indentWithTabs : false,
            foldGutter     : true,
            lineWrapping   : true,
            gutters        : ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
            lint           : true,
            value          : '/* Styles go here */'
        }
        $scope.config_js = {
            lineNumbers    : true,
            mode           : "javascript",
            theme          : "material",
            tabMode        : "indent",
            indentWithTabs : false,
            matchBrackets  : true,
            foldGutter     : true,
            lineWrapping   : true,
            gutters        : ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
            lint           : true,
            value          : '// Scripts go here'
        };
        $scope.codemirrorLoaded = function( _editor ) {
            var _doc = _editor.getDoc();
            _editor.setSize( "100%" , 450);
            _editor.setOption('autoRefresh', true);
        };
    }
    homeCtrl.$inject = [  '$scope', '$location' ];
}