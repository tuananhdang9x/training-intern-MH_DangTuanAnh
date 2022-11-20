import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)

import todo from './modules/todo.js'
const storeData = {
    modules: {
        todo
    }
}

const store = new Vuex.Store(storeData)

export default store