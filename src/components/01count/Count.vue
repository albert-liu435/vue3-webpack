<template>
  <div>
    <p>数量：{{ count }}</p>
    <p>状态：{{ state }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyCount',
  // props: ['count', 'state'],
  props: {
    //指定count的校验
    count: {
      //类型校验为Number
      type: Number,
      //是否为必传
      required: true,
      //默认值
      default: 100
    },
    state: Boolean,
    info: [String, Number],

    type: {
      //在封装组件时，可以为 prop 属性指定自定义的验证函数，从而对 prop 属性的值进行更加精确的控制
      validator (value) {
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  },
}
</script>

<style lang="less" scoped></style>
