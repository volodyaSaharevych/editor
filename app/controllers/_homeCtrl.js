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
            lineWrapping     : false,
            gutters          : ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
            value            : '<!DOCTYPE html>\n' +
           '<html lang="en">\n'+
           '<head>\n'+
                '<meta charset="UTF-8"/>\n'+
                '<meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n'+
                '<meta http-equiv="X-UA-Compatible" content="ie=edge"/>\n'+
                '<title>Document</title>\n'+
            '</head>\n'+
            '<body>\n'+   
            '</body>\n'+
            '</html>'
        };
        $scope.config_css = {
            lineNumbers    : true,
            mode           : "css",
            theme          : "material",
            indentWithTabs : false,
            foldGutter     : true,
            lineWrapping   : true,
            gutters        : ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
            value          : '/* Styles go here */'
        }
        $scope.config_js = {
            lineNumbers    : true,
            mode           : "javascript",
            theme          : "material",
            indentWithTabs : false,
            matchBrackets  : true,
            foldGutter     : true,
            lineWrapping   : true,
            gutters        : ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
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