// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../../public/index.html'),
    assetsRoot: path.resolve(__dirname, '../../public'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    assetsPublicPath: '/',
    port: 8080,
    proxyTable: {
      '/e-api': {
        target:'http://smile.e-pro.com.cn/', 
        changeOrigin: true,
        ws: true,
        pathRewrite:{
          '^/e-api': ''
        }
      },
      '/test-api': {
        target:'http://test.e-pro.com.cn/', 
        changeOrigin: true,
        ws: true,
        pathRewrite:{
          '^/test-api': ''
        }
      }
    }
  }
}
