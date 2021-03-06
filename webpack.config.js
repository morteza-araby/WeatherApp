var webpack = require('webpack')
const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'public')
};

module.exports = {

    /* entry: {
         app: PATHS.app
     },*/
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './src/index.js'
    ],
    externals: {
        jquery: 'jQuery'
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!' + 'css?sourceMap'
            },
            {
                test: /\.scss$/,
                loader: 'style!' + 'css?sourceMap' + '!sass?sourceMap'
            },
            {
                test: /\.(json)/,
                exclude: /node_modules/,
                loader: 'json-loader'
            },
            {
                test: /\.(svg|ttf|woff|woff2|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: PATHS.app + "/index.html",
                to: ""
            },
            {
                from: PATHS.app + "/style",
                to: "style/"
            }
        ]),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
        new CleanWebpackPlugin([PATHS.build], {
            root: __dirname,
            verbose: true,
            dry: false,
            exclude: ['shared.js']
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    /*devtool: 'cheap-module-eval-source-map',*/
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: PATHS.build
    }
};
