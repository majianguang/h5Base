var npath = require('path');
// 注意，这是修改指定代理的路径  默认当前根目录，与当前文件同级
var rootPath = './';
var middleware = true;

module.exports = {
    // bird 的名称, 该名称也会作为 demo server 的一个信息传过去
    name: 'h5Base',
    // bird 启动的 port, 如果设置成 middle ware的话, 将失效
    // 注意: 这个设置无法进行动态更改
    port: 80,
    // middleware 的话, bird会return一个中间件函数, 默认为false
    // 注意: 这个设置无法进行动态更改
    // middleware: false,
    middleware: middleware,

    // 默认的 静态资源 rootC
    root: rootPath,
    // root: npath.resolve(__dirname),

    // 目标后端, 默认为不设置
    useServer: 'httsServer',

    // 所有预设的 servers
    servers: {
        server: {
            server: 'http://xxx.xxx.com/',
        }
    },
    mockRoot: '.',
    // 需要请求的文件 默认空，表示所有html都可以接受代理
    defaultIndex: '',

    // routes 使用顺序单次匹配, 如果某一次匹配成功, 则不做下一次fallback匹配, 用于简单化整个数据转接的流程, 避免路由过于复杂, 调试繁琐
    routes: [
        { test: '/api' },
        { test: '/', static: '/' }
    ],

    // 是否打印出debug信息
    debug: false,

    // 是否发送 demo 信息的更新连接, 默认为 true
    shouldSendDemo: '',
    // 所有当前的demo
    demos: {
        // '/my-context/login.html': '登录页面',
        // '/other-module/list.html': '查看所有item的页面'
    }
};
