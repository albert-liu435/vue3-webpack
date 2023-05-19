const path = require("path"); //导入nodejs中专门操作路径的的模块

// 1. 导入插件，得到构造函数
const HtmlPlugin = require("html-webpack-plugin");
// 2. 创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

module.exports = {
  mode: "development", //mode用来指定构建模式，可选值有development和production
  // 指定打包的入口
  entry: path.join(__dirname, "./src/index.js"),
  // 指定打包的出口
  output: {
    // 表示输出文件的存放路径
    path: path.join(__dirname, "./dist"),
    // 表示输出文件的名称
    filename: "bundle.js",
  },
  //3、通过plugins节点，使htmlPlugin插件生效
  plugins: [htmlPlugin], // 3. 挂载插件的实例对象
  devServer: {
    open: true,
    host: "127.0.0.1",
    port: 80,
  },
};
