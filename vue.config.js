module.exports = {
  chainWebpack: config => {
    // 调整入口
    config
      .entryPoints.clear()
    config
      .entry('app').add('./examples/main.js').end()

    // 使用自己的模板文件
    config.plugin('html').tap(args => {
      args[0].template = './examples/index.html'
      return args
    })
  },
  devServer: {
    open: true
  }
}
