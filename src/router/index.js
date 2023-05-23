//1、按需导入对应的函数
import { createRouter, createWebHashHistory } from "vue-router";

//导入模块
import Login from "../views/MyLogin.vue";
import Home from "../views/MyHome.vue";

import Users from "../views/menus/MyUsers.vue";
import Rights from "../views/menus/MyRights.vue";
import Goods from "../views/menus/MyGoods.vue";
import Orders from "../views/menus/MyOrders.vue";
import Settings from "../views/menus/MySettings.vue";
import UserDetail from "../views/user/MyUserDetail.vue";

//2、创建路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    //路由重定向
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login, name: "login" },
    //Home组件的路由规则
    // { path: "/home", component: Home },
    {
      path: "/home",
      redirect: "/home/users",
      component: Home,
      name: "home",
      //子路由的规则
      children: [
        { path: "users", component: Users },
        { path: "rights", component: Rights },
        { path: "goods", component: Goods },
        { path: "orders", component: Orders },
        { path: "settings", component: Settings },
        //用户详情页的路由规则
        { path: "users/:id", component: UserDetail, props: true },
      ],
    },
  ],
});

// 全局路由导航守卫
router.beforeEach((to, from, next) => {
  // 判断用户访问的是否为登录页
  if (to.path === "/login") return next();
  // 获取 token 值
  const tokenStr = localStorage.getItem("token");
  if (!tokenStr) {
    next("/login");
  } else {
    next();
  }
});

//3、向外共享路由的实例对象
export default router;
