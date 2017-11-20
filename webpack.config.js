'use strickt';

const path               = require('path');
const webpack            = require('webpack');
const webpackDevServer   = require('webpack-dev-server');
const extractTextPlugin  = require('extract-text-webpack-plugin');
const resolve            = path.resolve;
const rootDir            = resolve ( __dirname);
const dist               = resolve(rootDir, 'public')
const appIndex           = resolve(rootDir, 'app/');
const styleIndex         = resolve(rootDir, './assets/style/main.scss');
const NODE_ENV           = process.env.NODE_ENV || 'development';

const config = {
    context : __dirname + '/app',
    watch   : NODE_ENV == 'development',
    watchOptions : {
        aggregateTimeout : 100
    },
    entry   : { 
        app    : appIndex,
        style  : styleIndex,
    },
    output  : {
        path       : dist,
        publicPath : '/public',
        filename   : 'js/[name].js',
    },
    devtool   :  NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,
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
        new extractTextPlugin({
            filename  : 'style/app.css',
            allChunks : true,
        })
    ]
};
module.exports = config;