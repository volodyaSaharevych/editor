module.exports = function ( moduleApp ) {
    require('./_loginCtrl.js')( moduleApp );
    require('./_signupCtrl.js')( moduleApp );
    require('./_homeCtrl.js')( moduleApp );
    require('./_outPutCtrl.js')( moduleApp );
};