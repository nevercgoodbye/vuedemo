// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import axios from './http'


Vue.config.productionTip = false

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store, 
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})

