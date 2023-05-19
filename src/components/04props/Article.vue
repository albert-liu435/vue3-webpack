<template>
  <div>
    <h3>标题：{{title}}</h3>
    <h5>作者：{{author}}</h5>
    <h6>发布时间：{{pubTime}}</h6>
  </div>
</template>

<script>
export default {
  name: 'MyArticle',
  // 外界可以传递指定的数据，到当前的组件中
  //props 的作用: 父组件通过 props 向子组件传递要展示的数据。props 的好处: 提高了组件的复用性
  // 父组件传递给 MyArticle 组件的数据，必须在 props 节点中声明
  props: ['title', 'author', 'pubTime']
}
</script>
