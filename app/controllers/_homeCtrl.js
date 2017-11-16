module.exports = function ( moduleApp ) {
    moduleApp.controller('HomeCtrl', homeCtrl );
    
    function homeCtrl ( $scope, $location ){
        var  frames = window.frames || window.document.frames;      
        $scope.config_cmr = {
            html : {
                mode             : "xml",
                htmlMode         : true,
                lineNumbers      : true,
                theme            : "material",
                indentWithTabs   : false,
                readOnly         : false,
                selectionPointer : true,
                htmlMode         : true,
                matchClosing     : true  
            },
            css : {
                lineNumbers    : true,
                mode           : "text/css",
                theme          : "material",
                indentWithTabs : false,
                readOnly       : false
            },
            js : {
                lineNumbers    : true,
                mode           : "text/javascript",
                theme          : "material",
                indentWithTabs : false,
                readOnly       : false,
                matchBrackets  : true
            }
        };

        editor_html = CodeMirror(document.getElementById("code_html"), config_cmr.html);
        editor_html.setSize( "100%" , 450);

        editor_css = CodeMirror(document.getElementById("code_css"), config_cmr.css);
        editor_css.setSize( "100%" , 450);
    
        editor_js = CodeMirror(document.getElementById("code_js"), config_cmr.js);
        editor_js.setSize( "100%" , 450);
    }
}