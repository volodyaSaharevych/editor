module.exports = function( moduleApp ) {
  require('./test/test.js')( moduleApp );
  require('./_resizable.js')( moduleApp );
  require('./_frameHtml.js')( moduleApp );
  require('./_frameCss.js')( moduleApp );
  require('./_frameJs.js')( moduleApp );
};