import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)

import todo from './modules/todo.js'
import file from './modules/file.js'
import list from './modules/list.js'
const storeData = {
    modules: {
        todo,
        file,
        list
    }
}

const store = new Vuex.Store(storeData)

export default store