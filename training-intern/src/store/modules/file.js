export default {
    namespaced: true,
    state: {
        files: [
        ],
    },
    getters: {
        getFiles: state => state.files
    },
    actions: {
        addFile({ commit }, payload) {
            commit('ADD_FILE', payload)
        },
        deleteFile({ commit }, id) {
            commit('DELETE_FILE', id)
        },
        formatFile({ commit }) {
            commit('FORMAT_FILE')
        }

    },
    mutations: {
        ADD_FILE(state, payload) {
            state.files.unshift({
                id: payload.id,
                name: payload.name,
                size: payload.size,
                extType: payload.extType
            })
        },
        DELETE_FILE(state, id) {
            state.files = state.files.filter(file => file.id !== id)
        },
        FORMAT_FILE(state) {
            state.files = [];
        }
    }
}