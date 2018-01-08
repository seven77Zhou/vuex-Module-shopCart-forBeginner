import Vue from 'vue'
import App from './App.vue'
import store from './store'

import { currency } from './currency'
import './assets/style/common.css'
// 注册
Vue.filter('myCurrency', currency)


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
