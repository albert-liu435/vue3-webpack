<template>
  <div>
    <h1>App 根组件</h1>
    <hr />

    <!-- <my-count count="abc" :state="3"></my-count> -->
    <my-count :count="99"
              :state="true"
              info="abc"
              type="success"></my-count>

  </div>
</template>

<script>
import MyCount from './components/01count/Count.vue'

export default {
  name: 'App',
  components: {
    MyCount,
  },
}
</script>
