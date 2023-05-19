# vue3-webpack

## nodejs项目创建

1. 新建空白项目，并运行npm init -y 命令，初始化包管理配置文件package.json
2. 新建src源代码目录
3. 新建src->index.html首页和src->index.js脚本文件
4. 初始化首页基本的结构
5. 运行npm install jquery -S命令，安装JQuery
6. 运行E6模块化的方式导入JQury,实现列表各行变色效果

```javascript
npm install --registry=http://registry.npm.taobao.org
```



## webpack使用

### webpack基本使用

#### 安装webpack包

```javascript
npm install webpack@5.5.1 webpack-cli@4.2.0 -D
```

如果安装依赖时速度特别慢，在安装时可以手动指定从哪个镜像服务器获取资源。如上面的这个可以用下面命令代替

```javascript
npm install webpack@5.5.1 webpack-cli@4.2.0 -D --registry=http://registry.npm.taobao.org
```

#### 项目中配置webpack

在项目跟目录中，创建名为webpack.config.js的webpack配置文件，并初始化如下的基本配置

```javascript
module.exports = {

 mode: "development", //mode用来指定构建模式，可选值有development和production

};
```

在package.json的scripts节点下，新增dev脚本如下

```javascript
 "scripts": {

  "dev":"webpack"//script节点下的脚本，可以通过npm run 命令执行

 }
```

在终端中运行npm run dev 命令，启动webpack进行项目的打包构建

##### mode的可选值

 mode节点可选值有两个，分别是：

- development

  开发环境，不会对打包生成的文件进行代码压缩和性能优化，打包速度快，适合在开发阶段使用

- production

  生产环境，会对打包生成的文件进行代码压缩和性能优化，打包速度慢，仅适合在项目发布阶段使用

##### webpack.config.js文件的作用

webpack.config.js是webpack的配置文件。webpack在真正开始打包构建之前，会先读取这个配置文件，从而基于给定的配置，对项目进行打包。

注意: 由于 webpack 是基于 node.js 开发出来的打包工具，因此在它的配置文件中，支持使用 node.js 相关的语法和模块进行 webpack 的个性化配置

##### webpack 中的默认约定

在 webpack 中有如下的默认约定：

默认的打包入口文件为 src -> index.js

默认的输出文件路径为 dist -> main.js

注意: 可以在 webpack.configjs 中修改打包的默认约定

##### 自定义打包的入口与出口

在 webpack.config.js 配置文件中，通过entry 节点指定打包的入口。通过 output 节点指定打包的出口

```javascript
const path = require("path"); //导入nodejs中专门操作路径的的模块

module.exports = {
  mode: "development", //mode用来指定构建模式，可选值有development和production
  // 指定打包的入口
  entry: path.join(__dirname, "./src/index.js"),
  // 指定打包的出口
  output: {
    // 表示输出文件的存放路径
    path: path.join(__dirname, "./dist"),
    // 表示输出文件的名称
    filename: "js/bundle.js",
  },
};

```

### webpack中的插件

webpack插件的作用

通过安装和配置第三方的插件，可以拓展 webpack 的能力，从而让 webpack 用起来更方便。最常用的webpack 插件有如下两个

webpack-dev-server：类似于 node.js 阶段用到的 nodemon 工具,每当修改了源代码，webpack 会自动进行项目的打包和构建

html-webpack-plugin:webpack 中的 HTML 插件 (类似于一个模板引警插件),可以通过此插件自定制index.html页面的内容

##### webpack-dev-server

webpack-dev-server 可以让 webpack 监听项目源代码的变化，从而进行自动打包构建

######  安装 webpack-dev-server

运行如下的命令，即可在项目中安装此插件:

```javascript
npm install webpack-dev-server@3.11.0 -D --registry=http://registry.npm.taobao.org
```

######  配置 webpack-dev-server

修改 package.json -> scripts 中的 dev 命令如下:

```
 "scripts": {
	//NODE_OPTIONS=--openssl-legacy-provider 是为了解决高版本nodejs的问题
  "dev": "SET NODE_OPTIONS=--openssl-legacy-provider && webpack serve"

 },
```

再次运行 npm run dev 命令，重新进行项目的打包

在浏览器中访问 http://localhost:8080 地址，查看自动打包效果

注意: webpack-dev-server 会启动一个实时打包的 http 服务器

###### 打包生成的文件哪儿去了

- 不配置 webpack-dev-server 的情况下，webpack打包生成的文件，会存放到实际的物理磁盘上

严格遵守开发者在 webpack.configjs 中指定配置。根据 output 节点指定路径进行存放

- 配置了 webpack-dev-server之后，打包生成的文件存放到了内存中

不再根据 output 节点指定的路径，存放到实际的物理磁盘上。提高了实时打包输出的性能，因为内存比物理磁盘速度快很多

##### html-webpack-plugin

html-webpack-plugin是webpack 中的 HTML 插件，可以通过此插件自定制index.html页面的内容

需求: 通过 html-webpack-plugin 插件，将 src 目录下的 index.html首页，复制到项目根目录中一份!

###### 安装 html-webpack-plugin

运行如下的命令，即可在项目中安装此插件:

```javascript
npm install html-webpack-plugin@4.5.0 -D --registry=http://registry.npm.taobao.org
```

###### 配置html-webpack-plugin

```javascript
// 1. 导入插件，得到构造函数
const HtmlPlugin = require('html-webpack-plugin')
// 2. 创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
  template: './src/index.html',
  filename: './index.html',
})
module.exports = {
  mode: "development", //mode用来指定构建模式，可选值有development和production
  //3、通过plugins节点，使htmlPlugin插件生效
  plugins: [htmlPlugin], // 3. 挂载插件的实例对象
};
```

###### 解惑html-webpack-plugin

通过 HTML 插件复制到项目根目录中的 index.html页面，也被放到了内存中

HTML 插件在生成的 index.html页面的底部，自动注入了打包的 bundle.js 文件

###### devServer 节点

在 webpack.config,js 配置文件中，可以通过 devServer节点对 webpack-dev-server 插件进行更多的配置

注意: 凡是修改了 webpack.config,js 配置文件，或修改了 package.json 配置文件，必须重启实时打包的服务器，否则最新的配置文件无法生效!

#### webpack 中的 loader

##### loader 概述

在实际开发过程中，webpack 默认只能打包处理以 .s 后缀名结尾的模块。其他非 s 后名结尾的模块,webpack 默认处理不了，需要调用 loader 加载器才可以正常打包，否则会报错!

loader 加载器的作用: 协助 webpack 打包处理特定的文件模块。比如:

css-loader 可以打包处理.css 相关的文件

less-loader 可以打包处理 .less 相关的文件

babel-loader 可以打包处理 webpack 无法处理的高级JS 语法

