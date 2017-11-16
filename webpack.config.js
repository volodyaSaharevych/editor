var path               = require('path');
var webpack            = require('webpack');
var webpackDevServer   = require('webpack-dev-server');
var extractTextPlugin  = require('extract-text-webpack-plugin');
var resolve            = path.resolve;
var rootDir            = resolve ( __dirname);
var dist               = resolve(rootDir, 'build')
var appIndex           = resolve(rootDir, 'app/');
var styleIndex         = resolve(rootDir, './assets/style/main.scss');

var config = {
    context : __dirname + '/app',
    watch   : true,
    entry   : { 
        app    : appIndex,
        style  : styleIndex,
        vendor : [
            'assets/libs/codemirror/codemirror-5.31.0/lib/codemirror.js',
            'assets/libs/codemirror/codemirror-5.31.0/mode/xml/xml.js',
            'assets/libs/codemirror/codemirror-5.31.0/mode/htmlmixed/htmlmixed.js',
            'assets/libs/codemirror/codemirror-5.31.0/mode/css/css.js',
            'assets/libs/codemirror/codemirror-5.31.0/mode/javascript/javascript.js'
        ]
    },
    output  : {
        path       : dist,
        publicPath : '/build',
        filename   : 'js/[name].js',
    },
    devtool   : "sourcemap",
    devServer : {
        host      : 'localhost',
        port      : 1313,
        compress  : true,
        open      : true,
        inline    : true,
        historyApiFallback  : true,
    },
    module: {
        rules: [
            {
                test : /\.scss$/,
                use  : extractTextPlugin.extract({
                    fallback : 'style-loader',
                    use      : ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.js'),
        new extractTextPlugin({
            filename  : 'style/app.css',
            allChunks : true,
        })
    ]
};
module.exports = config;