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
    { path: "/movie", component: Movie },

    //通过路由实现组件的嵌套展示，叫做嵌套路由。
    {
      // about 页面的路由规则(父级路由规则)
      path: "/about",
      component: About,
      // 嵌套路由的重定向
      redirect: "/about/tab1",
      // 通过 children 属性嵌套声明子级路由规则
      //声明子路由链接和子路由占位符
      //在父路由规则中，通过 children 属性嵌套声明子路由规则
      children: [
        // 通过 children 属性嵌套子级路由规则
        { path: "tab1", component: Tab1 }, // 访问 /about/tab1 时，展示 Tab1 组件
        { path: "tab2", component: Tab2 }, // 访问 /about/tab2 时，展示 Tab2 组件
      ],
    },
  ],
});

// 导出路由对象
export default router;
