import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './ele_ui'
import axios from 'axios'

Vue.prototype.$http = axios.create({
  baseURL:'http://localhost:3001/api'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
