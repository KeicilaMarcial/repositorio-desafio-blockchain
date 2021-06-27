const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require ('html-webpack-plugin')
module.exports = {
        entry: './src/index.js',
        output:{
            filename : 'bundle.js',
            path:  path.resolve(__dirname, './dist')
        },
        mode:'development',
        target:'node',
        devServer:{
            contentBase : path.resolve(__dirname, './dist'),
            index: 'index.html',
            port: 9000
        },
        module:{
            rules:[
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use :"babel-loader",
                    use: [
                           MiniCssExtractPlugin.loader,'css-loader'
                         ]
                }
            ]
        },
        plugins:[
            new MiniCssExtractPlugin({
                filename : 'index.css'
            }),
            new HtmlWebpackPlugin({
                filename:'index.html'
            })
        ]
}