import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入axios
import axios from "@/axios/index.js"

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
