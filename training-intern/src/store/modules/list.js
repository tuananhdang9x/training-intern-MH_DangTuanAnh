import { formatAddress } from "@/utils/index.js";
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        options: [],
        choseOptions: [],
    },
    getters: {
        listOptions: state => state.options,
        listChoseOptions: state => state.choseOptions,
    },
    actions: {
        async getOptions({ commit }) {
            try {
                const res = await Vue.axios.get('https://mocki.io/v1/d8f1303e-0810-4457-b8dc-66ddf6e0bf0e').then(res => res.data)
                commit('GET_OPTIONS', res)
            } catch (error) {
                throw Error(error)
            }
        },
        addItem({ commit }, payload) {
            commit('ADD_ITEM', payload)
        },
        deleteItem({ commit }, id) {
            commit('DELETE_ITEM', id)
        },
        addChoseList({ commit }, payload) {
            commit('ADD_CHOSE_LIST', payload)
        },
        deleteChoseItem({ commit }, id) {
            commit('DELETE_CHOSE_ITEM', id)
        },
    },
    mutations: {
        GET_OPTIONS(state, data) {
            state.options = []
            data.map(item => state.options.push({ id: item.id, name: item.name }));
        },
        ADD_CHOSE_LIST(state, payload) {
            state.choseOptions.push({
                id: payload.id,
                name: formatAddress(payload.name)
            })
        },
        DELETE_CHOSE_ITEM(state, id) {
            state.choseOptions = state.choseOptions.filter(item => item.id !== id)
        },
        DELETE_ITEM(state, id) {
            state.options = state.options.filter(item => item.id !== id)
        },
        ADD_ITEM(state, payload) {
            state.options.unshift({
                id: payload.id,
                name: payload.name
            })
        },
    }
}