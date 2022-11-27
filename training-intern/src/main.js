import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router'
import store from './store/store.js'
import { BootstrapVue, } from 'bootstrap-vue'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
