const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    productionSourceMap: false, //关闭map文件打包
    transpileDependencies: true,
    lintOnSave: false, //关闭eslint
    devServer: {
        proxy: {
            'api': {
                target: 'http://39.96.88.57:9090',
                // pathRewrite:{'^/api':''},
            }
        }
    }
})