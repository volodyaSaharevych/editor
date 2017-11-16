( function () {
    var editor_css, config_css;
    
    config_css = {
        lineNumbers    : true,
        mode           : "text/css",
        theme          : "material",
        indentWithTabs : false,
        readOnly       : false
    };
    
    editor_css = CodeMirror(document.getElementById("code_css"), config_css);
    editor_css.setSize( "100%" , 450);
}());