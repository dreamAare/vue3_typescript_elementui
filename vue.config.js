const path = require("path");

// function resolve(dir) {
//   return path.join(__dirname, dir);
// }

module.exports = {
  publicPath: "/",
  productionSourceMap: false,
  devServer: {
    port: 4399,
    open: false,
    // proxy: {
    //   '/api': {
    //     target: process.env.VUE_APP_API,
    //     changOrigin: true
    //   }
    // }
  },
  css: {
    loaderOptions: {
      // sass: {
      //   data: '@import "@/styles/variables.scss";'
      // }
    },
  },
  chainWebpack(config) {},
};
