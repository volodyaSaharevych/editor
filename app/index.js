var angular         = require('angular');
var route           = require('angular-route');
var onlineEditorApp = angular.module('onlineEditorApp', ['ngRoute']);
require('./configs')( onlineEditorApp );
require('./controllers')( onlineEditorApp );
require('./directives')( onlineEditorApp );
// require('./services')( onlineEditorApp );


