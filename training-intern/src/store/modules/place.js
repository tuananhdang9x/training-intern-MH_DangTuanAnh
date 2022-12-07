import { formatAddress } from "@/utils/index.js";
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        places: [],
        chosePlace: [],
    },
    getters: {
        listOptions: state => state.places,
        choseOptions: state => state.chosePlace,
    },
    actions: {
        async getOptions({ commit }) {
            try {
                const res = await Vue.axios.get('https://Provinces.open-api.vn/api/?depth=1')
                commit('GET_OPTIONS', res.data)
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
            data.map(item => state.places.push({ id: item.code, name: formatAddress(item.name) }));
        },
        ADD_CHOSE_LIST(state, payload) {
            state.chosePlace.push({
                id: payload.id,
                name: formatAddress(payload.name)
            })
        },
        DELETE_CHOSE_ITEM(state, id) {
            state.chosePlace = state.chosePlace.filter(place => place.id !== id)
        },
        DELETE_ITEM(state, id) {
            console.log(id)
            state.places = state.places.filter(place => place.id !== id)
        },
        ADD_ITEM(state, payload) {
            state.places.unshift({
                id: payload.id,
                name: payload.name
            })
        },
    }
}