<template>
  <div>
    <h1>这是 App.vue 组件</h1>

    <p>App 中的 p 标签</p>
    <p>App 中的 p 标签</p>

    <hr />

    <MyList></MyList>
  </div>
</template>

<script>
import MyList from './components/03style/List.vue'

export default {
  name: 'MyApp',
  components: {
    // MyList,
    'MyList': MyList
  },
}
</script>

<style lang="less" scoped>
// 标签选择器
p {
  color: red;
}

// /deep/ .title {
//   color: blue;
// }

// :deep(.title) {
//   color: blue;
// }
</style>