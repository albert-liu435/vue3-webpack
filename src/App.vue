<script >
//今后，组件相关的 data 数据、methods 方法等都需要定义到 export default 所导出的对象中
export default {

  // name 属性指向的是当前组件的名称(建议: 每个单词的首字母大写)
  //组件名称
  name: 'MyApp',
  // 组件的数据 (data 方法中 return 出去的对象，就是当前组件渲染期间需要用到的数据对象)
  data () {

    return {
      username: '张三',
      count: 0,
    }
  },
  methods: {
    addCount () {//处理函数
      this.count++;
    }
  }

}
</script>

<template>

  <h1>这是 <i>App.vue</i> 根组件</h1>
  <hr />
  <h3>abc --- {{ username }}</h3>
  <hr />
  <p>count值是：{{ count }}</p>
  <button @click="addCount">+1</button>

</template>

<style lang="less">
h1 {
  color: red;
  i {
    color: blue;
  }
}
</style>
