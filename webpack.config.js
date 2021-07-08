const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require ('html-webpack-plugin')

const srcDir        = path.join(__dirname,"./src")
const entry         = path.join(srcDir, "index.jsx" )
module.exports = {
        entry: './src/index.jsx',
        output:{
            filename : 'bundle.js',
            path:  path.resolve(__dirname, './dist')
        },
        stats: {
            children: true,
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
                    test:/\.(js|jsx|css)$/,
                    exclude: /node_modules/,
                    use :"babel-loader",
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,'css-loader'
                    ]
                }
            ]
        },
       

        resolve: {
            extensions: [".js", ".jsx", ".json"],
            modules: [ "node_modules", srcDir ],
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