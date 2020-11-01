module.exports = {
    devServer: {
        proxy: {
            '/baidu': {
                // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
                target: 'https://www.baidu.com/',
                // 允许跨域
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/baidu': ''
                }
            },
            '/google': {
                // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
                target: 'https://www.google.com/',
                // 允许跨域
                changeOrigin: true,
                ws: true,
                logLevel: "debug",
                pathRewrite: {
                    '^/google': ''
                }
            }
        }
    }
}
