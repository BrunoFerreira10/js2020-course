import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msg'
import store from  './config/store'
import router from  './config/router'


Vue.config.productionTip = false

// TEMP LOGIN
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkJydW5vIEZlcnJlaXJhIiwiZW1haWwiOiJicnVub2ZlcnJlaXJhODZtYWluQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1OTIzNTE5ODcsImV4cCI6MTU5MjYxMTE4N30.seDmdlMbZ3kvsCYhvFukxo5sJR6gF-FUmFOYtv0ptaA'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')