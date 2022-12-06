import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router'
import store from './store/store.js'
import { BootstrapVue, } from 'bootstrap-vue'
<<<<<<< HEAD
import { firebaseConfig } from './firebase-config.js'
import { getStorage, ref } from 'firebase/storage'
import { initializeApp } from 'firebase/app'
=======
import axios from 'axios'
import VueAxios from 'vue-axios'
>>>>>>> main
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

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
