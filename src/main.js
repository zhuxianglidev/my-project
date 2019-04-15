// 项目的入口文件
// 导入node_module中的vue
import Vue from 'vue'
// 导入根组件
import App from './App.vue'

new Vue({
  // 与index中的div#app对应
  el: '#app',
  // 渲染根组件,让用户在浏览器中能看到
  render: h => h(App)
})
