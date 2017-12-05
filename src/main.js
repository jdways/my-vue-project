// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'
import VueResouse from 'vue-resource'
import mint from 'mint-ui'
import 'mint-ui/lib/style.css' 
import './assets/css/mui.min.css'
Vue.use(mint)
Vue.use(VueResouse)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render(h){
        return h(App);
   }
  /*template: '<App/>',
  components: { App }*/
})
