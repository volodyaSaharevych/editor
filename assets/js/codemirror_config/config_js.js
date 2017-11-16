( function () {
    var editor_js, config_js;
    
    config_js = {
        lineNumbers    : true,
        mode           : "text/javascript",
        theme          : "material",
        indentWithTabs : false,
        readOnly       : false,
        matchBrackets  : true
    };
    
    editor_js = CodeMirror(document.getElementById("code_js"), config_js);
    editor_js.setSize( "100%" , 450);

}());