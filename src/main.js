//1.从 vue 中按需导入 createApp 函数,createApp 函数的作用: 创建 vue 的“单页面应用程序实例”
import { createApp } from "vue";
import App from "./App.vue";
// 导入 bootstrap 样式表
import "./assets/css/bootstrap.css";
// 导入全局自定义样式表
import "./style.css";

//导入路由模块
import router from "./router";

const app = createApp(App);

//挂在路由
app.use(router);

//调用 app 实例的 mount 方法，用来指定 vue 实际要控制的区域
app.mount("#app");
