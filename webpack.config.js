var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
    entry: './js/main.js',
    output: { path: __dirname, filename: 'app.bundle.js' },
    module: {
        rules: [
        
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
           {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
                })
            },
            {
                test: /\.less$/,
                loader: "style-loader"
            },
            {
                test: /\.less$/,
                loader: "css-loader"
            },
            {
                test: /\.less$/,
                use: "less-loader"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader"
            }
        ]
    },
    plugins: [
     new ExtractTextPlugin({
      filename: "[name].css"
    }),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
    ]
};