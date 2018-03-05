

const path =require("path");
const CleanWebPackPlugin = require("clean-webpack-plugin");

function resolve (dir) {
    return path.join(__dirname, '..', dir)
  }


module.exports = {
    entry:"./src/index.js",
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader',
                exclude: /node_modules/,  
            },
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude:/node_modules/
            },
            {
                test:/\.(svg|woff2?|eot|ttf|otf)(\?.*)?$/,
                loader:'url-loader?limit=10240'
            },
            {
                test:/\.css$/,
                use:[
                    {loader:"style-loader"},
                    {
                        loader:"css-loader",
                        options:{
                            minimize:true
                        }
                    }
                ]
            }
        ]
    },
    resolve:{
        extensions:['.js','.vue','.json'],
        alias: {
            'vue$': 'vue/dist/vue.common.js',  // 'vue/dist/vue.common.js' for webpack 1
            'src': resolve('src'),
            'assets': resolve('src/assets'),
            'components': resolve('src/components')
          }
    },
    plugins:[
        new CleanWebPackPlugin(['dist']),

    ]
}