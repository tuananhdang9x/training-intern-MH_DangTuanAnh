import { formatAddress } from "@/utils/index.js";
import Vue from 'vue'

export default {
    namespaced: true,
    state: {
        options: [],
    },
    getters: {
        listOptions: state => state.options,
    },
    actions: {
        async getOptions({ commit }) {
            try {
                const res = await Vue.axios.get('https://Provinces.open-api.vn/api/?depth=1')
                commit('GET_OPTIONS', res.data)
            } catch (error) {
                throw Error(error)
            }
        }
    },
    mutations: {
        GET_OPTIONS(state, data) {
            data.map(item => state.options.push({ id: item.code, name: formatAddress(item.name) }));
        },
    }
}