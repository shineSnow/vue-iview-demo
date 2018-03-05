

const path= require('path');
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.min.html',
    });

const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const UglifyJSPluginConfig = new UglifyJSPlugin({
    compress:{warnings:false}
});
module.exports = merge(common,{
    devtool:"eval-source-map",
    output:{
        path:path.resolve(__dirname,"./dist"),
        filename:"bundle.min.js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextPlugin({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin.DefinePlugin({
            'process.env':{
                NODE_ENV:JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin("styles.css"),
        UglifyJSPluginConfig,
        HtmlWebpackPluginConfig
    ]
})
