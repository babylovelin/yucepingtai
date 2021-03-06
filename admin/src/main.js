// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
Axios.defaults.baseURL = 'http://47.104.78.189:3000/'
// Axios.defaults.baseURL = 'http://127.0.0.1:3000/'
Vue.config.productionTip = false
Vue.prototype.$http = Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})