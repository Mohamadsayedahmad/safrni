const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },

    module: {
     
        rules: [
            {
                test: /\.html$/,
                use: [
                  {
                    loader: 'html-loader',
                  }
                ],
              },
              {
                test: /\.css$/i,
                use: [ MiniCssExtractPlugin.loader, 'css-loader',
                  ],
              },
              {
                test: /\.(jpe?g|png|gif|PNG|jfif)$/,
                type: 'asset/resource',
                generator: {
                  filename: 'img/[name][ext]'
                }
              },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',

            },
           
            {
                test: /\.s[ac]ss$/i,
            
                use: [
            
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],

            },
            

        ],
    },
    devServer: {
        static: './dist',
        port: 1234,
        liveReload: true,


    },

    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
        filename: 'round1.html',
        template: './src/round1.html'
    }),
    new HtmlWebpackPlugin({
        filename: 'login.html',
        template: './src/login.html'
    }),
    new HtmlWebpackPlugin({
        filename: 'register.html',
        template: './src/register.html'
    }),
    new HtmlWebpackPlugin({
        filename: 'round2.html',
        template: './src/round2.html'
    }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
 }),
    ],

    

}

