// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Router from 'vue-router'
import VueResouse from 'vue-resource'
import mint from 'mint-ui'
import 'mint-ui/lib/style.css' 
import './css/mui.min.css'
import './css/app.css'
import App from './App'
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
