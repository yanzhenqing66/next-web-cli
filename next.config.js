/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  /**
   * buildId - 字符串类型，构建的唯一标示
   * dev - Boolean型，判断你是否在开发环境下
   * isServer - Boolean 型，为true使用在服务端, 为false使用在客户端.
   * defaultLoaders - 对象型 ，内部加载器, 你可以如下配置
   *     babel - 对象型，配置 babel-loader.
   *     hotSelfAccept - 对象型， hot-self-accept-loader配置选项.这个加载器只能用于高阶案例。如 @zeit/next-typescript添加顶层 typescript 页面。
   */
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      components: path.resolve(__dirname, './components'),
      sass: path.resolve(__dirname, './sass'),
      static: path.resolve(__dirname, './static'),
    }
    return config
  },
}

module.exports = nextConfig
