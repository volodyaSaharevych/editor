module.exports = function( moduleApp ) {
  require('./test/test.js')( moduleApp );
  require('./_resizable.js')( moduleApp );
};