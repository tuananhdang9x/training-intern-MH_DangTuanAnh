import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)

import todo from './modules/todo.js'
import file from './modules/file.js'
import list from './modules/list.js'
import place from './modules/place.js'
const storeData = {
    modules: {
        todo,
        file,
        list,
        place
    }
}

const store = new Vuex.Store(storeData)

export default store