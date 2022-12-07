export default {
    namespaced: true,
    state: {
        files: [
        ],
        fileRaws: [],
    },
    getters: {
        getFiles: state => state.files,
        getFileRaws: state => state.fileRaws
    },
    actions: {
        addFile({ commit }, payload) {
            commit('ADD_FILE', payload)
        },
        deleteFile({ commit }, id) {
            commit('DELETE_FILE', id)
        },
        addFileRaw({ commit }, file) {
            commit('ADD_FILE_RAW', file)
        },
        deleteFileRaw({ commit }, id) {
            commit('DELETE_FILE_RAW', id)
        },
        clearFile({ commit }, name) {
            commit('CLEAR_FILE', name)
        },
        clearFileRaw({ commit }, name) {
            commit('CLEAR_FILE_RAW', name)
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
        ADD_FILE_RAW(state, file) {
            state.fileRaws.unshift(file)
        },
        DELETE_FILE(state, id) {
            state.files = state.files.filter(file => file.id !== id)
        },
        DELETE_FILE_RAW(state, id) {
            state.fileRaws = state.fileRaws.filter(file => file.id !== id)
        },
        CLEAR_FILE(state, name) {
            state.files = state.files.filter(item => item.name !== name)
        },
        CLEAR_FILE_RAW(state, name) {
            state.fileRaws = state.fileRaws.filter(item => item.name !== name)
        }
    }
}