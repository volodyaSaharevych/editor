var angular         = require('angular');
var route           = require('angular-route');
var angUiCodemirror = require('angular-ui-codemirror'); 
var onlineEditorApp = angular.module('onlineEditorApp', ['ngRoute','ui.codemirror']);
require('./configs')( onlineEditorApp );
require('./controllers')( onlineEditorApp );
require('./directives')( onlineEditorApp );
// require('./services')( onlineEditorApp );


