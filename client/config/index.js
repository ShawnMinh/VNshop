<<<<<<< HEAD
'use strict'
=======

>>>>>>> 72fc288cdafa2463a6d296a6faf5b6406d02e14b
// Template version: 1.1.3
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');

module.exports = {
<<<<<<< HEAD
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true,
=======
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
>>>>>>> 72fc288cdafa2463a6d296a6faf5b6406d02e14b
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
<<<<<<< HEAD
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
=======
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
>>>>>>> 72fc288cdafa2463a6d296a6faf5b6406d02e14b
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
<<<<<<< HEAD
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: process.env.PORT || 8080,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/goods/*': {
                target: 'http://localhost:3000'
            },
            '/users/*': {
                target: 'http://localhost:3000'
            },
            '/api/**': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    '^/api': '/'
                }
            },

        },
=======
    bundleAnalyzerReport: process.env.npm_config_report,
  },
  dev: {
    env: require('./dev.env'),
    port: process.env.PORT || 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/goods/*': {
        target: 'http://localhost:3000',
      },
    },
>>>>>>> 72fc288cdafa2463a6d296a6faf5b6406d02e14b
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
<<<<<<< HEAD
        cssSourceMap: false
    }
}
=======
    cssSourceMap: false,
  },
};
>>>>>>> 72fc288cdafa2463a6d296a6faf5b6406d02e14b
