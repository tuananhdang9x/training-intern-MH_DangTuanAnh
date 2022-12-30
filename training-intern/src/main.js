import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router'
import store from './store/store.js'
import { BootstrapVue, } from 'bootstrap-vue'
import { firebaseConfig } from './firebase-config.js'
import { getStorage, ref } from 'firebase/storage'
import { initializeApp } from 'firebase/app'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Toasted from 'vue-toasted'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.use(Toasted, {
  position: 'top-right',
  duration: 3000,
  theme: "bubble",
})

Vue.toasted.register('error_msg', "The date confict was found", {
  type: 'error',
})
Vue.toasted.register('success_msg', "Submit form successfully", {
  type: 'success',
})

const router = new VueRouter({
  mode: 'history',
  routes
})
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const storageRef = ref(storage);

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
