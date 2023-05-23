// 1.从 vue-router 中按需导入两个方法
// createRouter 方法用于创建路由的实例对象
// createWebHashHistory 用于指定路由的工作模式 (hash 模式)
import { createRouter, createWebHashHistory } from "vue-router";

// 2.导入组件，这些组件将要以路由的方式，来控制它们的切换
import Home from "./MyHome.vue";
import Movie from "./MyMovie.vue";
import About from "./MyAbout.vue";

// 创建路由对象
//3.创建路由实例对象
const router = createRouter({
  // 指定路由的工作模式
  // 3.1 通过 history 属性指定路由的工作模式
  history: createWebHashHistory(),
  // 自定义路由高亮的 class 类
  linkActiveClass: "active-router",
  // 声明路由的匹配规则
  // 3.2 通过 routes 数组，指定路由规则
  routes: [
    // path 是 hash 地址，component 是要展示的组件
    //路由重定向指的是:用户在访问地址 A 的时候，强制用户跳转到地址C，从而展示特定的组件页面
    //通过路由规则的 redirect 属性，指定一个新的路由地址，可以很方便地设置路由的重定向
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/movie", component: Movie },
    { path: "/about", component: About },
  ],
});

// 导出路由对象
// 4.向外共享路由实例对象,
//供其它模块导入并使用
export default router;
