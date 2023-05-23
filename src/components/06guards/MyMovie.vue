<template>
  <div>

    <!-- 通过动态路由匹配的方式渲染出来的组件中，可以使用 $route.params 对象访问到动态匹配的参数值 -->
    <!-- $route.params 是路由的“参数对象” -->
    <!-- 3、直接使用 props 中接收的路由参数 -->
    <h3>MyMovie 组件 --- {{ $route.params.mid }} --- {{ mid }}</h3>
    <button type="button"
            class="btn btn-danger"
            @click="goBack">后退</button>
  </div>
</template>

<script>
export default {
  name: 'MyMovie',
  // 为了简化路由参数的获取形式，vue-router 允许在路由规则中开启 props 传参
  props: ['mid'], // // 2、使用 props 接收路由规则中匹配到的参数项
  methods: {
    goBack () {
      //实现导航历史的前进、后退
      //调用 this.$router.go() 方法，可以在浏览历史中进行前进和后退
      this.$router.go(-1)
    },
  },
}
</script>

<style  scoped></style>
