<template>
  <div>
    <h1>App 根组件</h1>
    <hr />

    <my-counter></my-counter>
  </div>
</template>

<script>
import MyCount from './components/02computed/MyCounter.vue'

export default {
  name: 'App',
  components: {
    MyCount,
  },
}
</script>
