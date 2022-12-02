import { formatAddress } from "../../utils/index.js";

export default {
    namespaced: true,
    state: {
        places: [
        ],
        chosePlace: [],
    },
    getters: {
        placeList: state => state.places,
        chosePlace: state => state.chosePlace,
    },

    actions: {
        async ['getPlace']({ commit }) {
            await fetch("https://Provinces.open-api.vn/api/?depth=1")
                .then(res => {
                    if (res.status >= 200 && res.status <= 299) {
                        return res.json();
                    } else {
                        throw Error(res.statusText)
                    }
                })
                .then(data => {
                    commit('GET_PLACE', data)
                }).catch(error => {
                    console.log(error)
                });
        },
        addPlace({ commit }, payload) {
            commit('ADD_PLACE', payload)
        },
        detelePlace({ commit }, name) {
            commit('DELETE_PLACE', name)
        },
        addChosePlace({ commit }, payload) {
            commit('ADD_FILTERED_LIST', payload)
        },
        deleteChosePlace({ commit }, id) {
            commit('DELETE_FILTERED_LIST', id)
        },
    },
    mutations: {
        GET_PLACE(state, data) {
            data.map(place => state.places.push({ id: place.code, name: formatAddress(place.name) }));
        },
        ADD_FILTERED_LIST(state, payload) {
            state.chosePlace.push({
                id: payload.id,
                name: formatAddress(payload.name)
            })
        },
        DELETE_FILTERED_LIST(state, id) {
            state.chosePlace = state.chosePlace.filter(place => place.id !== id)
        },
        DELETE_PLACE(state, name) {
            state.places = state.places.filter(place => place.name !== name)
        },
        ADD_PLACE(state, payload) {
            state.places.unshift({
                id: payload.id,
                name: payload.name
            })
        },
    }
}