( function () {
    var editor_html, config_html, frames;

    frames = window.frames || window.document.frames;      
   
    config_html = {
        mode             : "xml",
        htmlMode         : true,
        lineNumbers      : true,
        theme            : "material",
        indentWithTabs   : false,
        readOnly         : false,
        selectionPointer : true,
        htmlMode         : true,
        matchClosing     : true    
    };
     
    editor_html = CodeMirror(document.getElementById("code_html"), config_html);
    editor_html.setSize( "100%" , 450);

}());