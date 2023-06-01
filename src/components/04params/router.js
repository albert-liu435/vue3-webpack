import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./MyHome.vue";
import Movie from "./MyMovie.vue";
import About from "./MyAbout.vue";

import Tab1 from "./tabs/MyTab1.vue";
import Tab2 from "./tabs/MyTab2.vue";

// 创建路由对象
const router = createRouter({
  // 指定路由的工作模式
  history: createWebHashHistory(),
  // 自定义路由高亮的 class 类
  linkActiveClass: "active-router",
  // 声明路由的匹配规则
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    // 动态路由匹配
    //动态路由指的是: 把 Hash 地址中可变的部分定义为参数项，从而提高路由规则的复用性。在 vue-router 中,使用英文的冒号 (:)来定义路由的参数项
    //在定义路由规则时，声明 props: true 选项，即可在 Movie 组件中，以 props 的形式接收到路由规则匹配到的参数项
    { path: "/movie/:mid", component: Movie, props: true },
    {
      path: "/about",
      component: About,
      // 嵌套路由的重定向
      redirect: "/about/tab1",
      // 通过 children 属性嵌套声明子级路由规则
      children: [
        { path: "tab1", component: Tab1 },
        { path: "tab2", component: Tab2 },
      ],
    },
  ],
});

// 导出路由对象
export default router;
