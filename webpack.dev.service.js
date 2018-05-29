var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var webpackConfig = require('./webpack.config.js');
var compiler = webpack(webpackConfig);
var bird = require('birdv3');
var server = new WebpackDevServer(compiler, {

    watchContentBase: true,

    disableHostCheck: true,
    // 允许绑定本地域名
    allowedHosts: [
        'xxx.xxx.com'
    ],

    // before: function (app) {
    //     app.use(bird('./birdfileConfig.js'))
    // },

    hot: true,
    historyApiFallback: true,
    // It suppress error shown in console, so it has to be set to false.
    quiet: false,
    // It suppress everything except error, so it has to be set to false as well
    // to see success build.
    noInfo: false,
    stats: {
        // Config for minimal console.log mess.
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
    },
    proxy: {
        "/api": {
            target: "https://xxx.xxxx.com",
            // 因为使用的是https，会有安全校验，所以设置secure为false
            secure: false,
            // port: 80,
            // ingorePath 默认即为 false, 注释掉也可以
            // ingorePath: false, 
            // changeOrigin是关键，如果不加这个就无法跳转请求
            changeOrigin: true,
        }
    },
    // contentBase不要直接指向pages，因为会导致css、js支援加载不到
    contentBase: __dirname + '/src/',
}).listen(80, '0.0.0.0', function (err) {
    if (err) {
        console.log(err);
    }
});
