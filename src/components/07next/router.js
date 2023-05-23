import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./Home.vue";
import Main from "./Main.vue";
import Login from "./Login.vue";

// 创建路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/main", component: Main },
    { path: "/login", component: Login },
  ],
});

// 全局路由导航守卫
//导航守卫可以控制路由的访问权限。
//全局导航守卫会拦截每个路由规则，从而对每个路由进行访问权限的控制。可以按照如下的方式定义全局导航守卫:
// // 调用路由实例对象的 beforeEach 函数，声明”全局前置守卫“5 // fn 必须是一个函数，每次拦截到路由的请求，都会调用 fn 进行处理
6; // 因此 fn 叫做 “守卫方法”

router.beforeEach((to, from, next) => {
  //// to 目标路由对象
  // from 当前导航正要离开的路由对象
  // next 是一个函数，表示放行
  //注意:
  //在守卫方法中如果不声明 next 形参，则默认允许用户访问每一个路由!
  //2在守卫方法中如果声明了 next 形参，则必须调用 next()函数，否则不允许用户访问任何一个路由!
  const tokenStr = localStorage.getItem("token"); // 1.读取 token

  //直接放行: next()
  // 强制其停留在当前页面: next(false
  //  强制其跳转到登录页面: next('/login'
  if (to.path === "/main" && !tokenStr) {
    // 2想要访问“后台主页”且 token 值不存在

    // next(false) // 3.1 不允许跳转
    // 证明用户要访问后台主页
    next("/login"); // 3.2 强制跳转到 “登录页面"
  } else {
    // 访问的不是后台主页
    next(); //3.3 直接放行，允许访问“后台主页”
  }
});

export default router;
