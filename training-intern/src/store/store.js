import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)

import todo from './modules/todo.js'
import place from './modules/place.js'
import file from './modules/file.js'
const storeData = {
    modules: {
        todo,
        place,
        file
    }
}

const store = new Vuex.Store(storeData)

export default store