<template>
  <div>
    <h3>MyHome 组件</h3>
    <button type="button"
            class="btn btn-primary"
            @click="goToMovie(3)">导航到Movie页面</button>
  </div>
</template>

<script>
export default {
  name: 'MyHome',
  methods: {
    goToMovie (id) {
      // 跳转到指定 Hash 地址，从而展示对应的组件
      //调用 this.$router.push()方法，可以跳转到指定的 hash 地址，从而展示对应的组件页面
      this.$router.push('/movie/' + id)
    },
  },
}
</script>

<style  scoped></style>
