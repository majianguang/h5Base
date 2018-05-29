
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const srcDir = path.join(__dirname, './src');
const distDir = path.join(__dirname, './dist');

module.exports = {
    entry: {
        index: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:80',
            "./src/js/index.js"
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // 给js css 图片等在html引入中添加前缀
        publicPath: "../../",
        filename: 'js/[name].min.js',
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: {
                        loader: 'css-loader'
                    },
                })
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192&name=img/[name].[ext]'
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),

        new ExtractTextPlugin('style/[name].min.css'),
        new HtmlWebpackPlugin({
            hash: true,
            chunks: ['index'],
            template: "./src/pages/index/index.html",
            filename: "pages/index/index.html"
        }),
        
        new webpack.HotModuleReplacementPlugin(),
    ]
};