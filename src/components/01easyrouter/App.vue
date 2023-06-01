<template>
  <div>
    <h1>App 根组件</h1>

    <a href="#/home">Home</a>&nbsp; <a href="#/movie">Movie</a>&nbsp; <a href="#/about">About</a>&nbsp;
    <hr />

    <component :is="comName"></component>
  </div>
</template>

<script>
import MyHome from './MyHome.vue'
import MyMovie from './MyMovie.vue'
import MyAbout from './MyAbout.vue'

export default {
  name: 'MyApp',
  data () {
    return {
      comName: 'MyHome',
    }
  },

  //1、用户点击了页面上的路由链接
  //2、导致了 URL 地址栏中的 Hash 值发生了变化
  //3、前端路由监听了到 Hash 地址的变化
  //4、前端路由把当前 Hash 地址对应的组件渲染都浏览器中
  //5、结论: 前端路由，指的是 Hash 地址与组件之间的对应关系!
  created () {
    // 监听 hash 值变化的事件
    window.onhashchange = () => {
      // 通过 location.hash 获取到最新的 hash 值，并进行匹配
      switch (location.hash) {
        case '#/home':
          this.comName = 'MyHome'
          break
        case '#/movie':
          this.comName = 'MyMovie'
          break
        case '#/about':
          this.comName = 'MyAbout'
          break
      }
    }
  },
  components: {
    MyHome,
    MyMovie,
    MyAbout,
  },
}
</script>

<style></style>
