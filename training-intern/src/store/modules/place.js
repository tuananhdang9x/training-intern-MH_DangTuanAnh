import { formatAddress } from "@/utils/index.js";
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        places: [],
    },
    getters: {
        listPlaces: state => state.places,
    },
    actions: {
        async getPlaces({ commit }) {
            try {
                const res = await Vue.axios.get('https://Provinces.open-api.vn/api/?depth=1')
                commit('GET_OPTIONS', res.data)
            } catch (error) {
                throw Error(error)
            }
        }
    },
    mutations: {
        GET_PLACES(state, data) {
            data.map(item => state.places.push({ id: item.code, name: formatAddress(item.name) }));
        },
    }
}