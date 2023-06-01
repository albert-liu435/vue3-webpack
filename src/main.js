//1.从 vue 中按需导入 createApp 函数,createApp 函数的作用: 创建 vue 的“单页面应用程序实例”
import { createApp } from "vue";

import './assets/css/bootstrap.css'
import './index.css'
//2.导入待染的 App 组件
import App from "./App.vue";
// import { App } from "./components/01count/App.vue";

//调用 createApp() 函数，这回值是“单页面应用程序的实例”，用常量 spa app 进行接收
//同时把 App 组件作为参数传给 createApp 函数，表示要把 App 染到 index.html 页面上
const app = createApp(App);

//调用 app 实例的 mount 方法，用来指定 vue 实际要控制的区域
app.mount("#app");
