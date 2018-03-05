
const webpack = require('webpack');
const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template:'./index.html',
    filename:'index.html',
});


module.exports =merge(common,{
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    devtool:'source-map',
    devServer:{
        contentBase:'./dist',
        port:"8080",
        open:true
    },
    plugins:[
        HtmlWebpackPluginConfig,
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify('production')
            }
          })
    ]
})

