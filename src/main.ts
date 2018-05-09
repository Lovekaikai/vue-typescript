// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './css/common.css'
import common from '../src/js/common.js'

Vue.prototype.$http = common
declare module 'vue/types/vue' {
  interface Vue {
    $Loading: any
    $Modal: any
    $http: any
    $qs: any
    $common: any
  }
}
Vue.use(ElementUI)
Vue.config.productionTip = false

let vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
