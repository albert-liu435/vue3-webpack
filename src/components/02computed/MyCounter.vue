<template>
  <div>
    <input type="text"
           v-model.number="count" />
    <p>{{ count }} 乘以 2 的值为：{{ plus }}</p>
    <p>{{ count }} 乘以 2 的值为：{{ plus }}</p>
    <p>{{ count }} 乘以 2 的值为：{{ plus }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyCounter',
  data () {
    return {
      count: 1,
    }
  },

  //   计算属性必须定义在 computed 节点中
  // 计算属性必须是一个 function 函数
  // 计算属性必须有返回值
  // 计算属性必须当做普通属性使用

  //计算属性本质上就是一个function 函数，它可以实时监听 data 中数据的变化，并return 一个计算后的新值供组件渲染 DOM 时使用。
  //相对于方法来说，计算属性会缓存计算的结果，只有计算属性的依赖项发生变化时，才会重新进行运算。因此计算属性的性能更好
  computed: {
    plus () {
      console.log('计算属性被执行了')
      return this.count * 2
    },
  },
  methods: {
    // plus() {
    //   console.log('方法被执行了')
    //   return this.count * 2
    // }
  }
}
</script>

<style></style>
