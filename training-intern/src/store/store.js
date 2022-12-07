import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)

import todo from './modules/todo.js'
import file from './modules/file.js'
const storeData = {
    modules: {
        todo,
        file
    }
}

const store = new Vuex.Store(storeData)

export default store