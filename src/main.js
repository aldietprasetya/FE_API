import VueResource from 'vue-resource'
import vSelect from "./components/vSelect"

Vue.use(VueResource)
Vue.component('vSelect',vSelect)

import moment from 'moment'
Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY')
  }
})

import VueRouter from 'vue-router'
import routes from './router/index'
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false


import Vue from 'vue'
import App from './App.vue'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
