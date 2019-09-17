import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Jquery from 'vue-jquery'
import moment from 'moment'
require('./assets/css/new.min.css')
require('./assets/css/style.min.css')

Vue.config.productionTip = false
Vue.use(Jquery)
Vue.use(VueResource)
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY')
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
