export default {
    namespaced: true,
    state: {
        todos: [
        ],
        showAddMode: {
            isShow: false
        }
    },
    getters: {
        getTodo: state => state.todos,
        getShowInput: state => state.showAddMode.isShow
    },

    actions: {
        showAddMode({ commit }) {
            commit('SHOW_ADD_MODE')
        },
        saveTodo({ commit }, newTodo) {
            commit('SAVE_TODO', newTodo)
        },
        updateTodo({ commit }, payload) {
            commit('UPDATE_TODO', payload)
        }
    },
    mutations: {
        SAVE_TODO(state, newTodo) {
            state.todos.unshift(newTodo)
        },
        UPDATE_TODO(state, payload) {
            const index = state.todos.findIndex(todo => todo.id == payload.id)
            state.todos[index].status = payload.status;
            state.todos[index].endDateTime = payload.endDateTime
        },
        SHOW_ADD_MODE(state) {
            state.showAddMode.isShow = !state.showAddMode.isShow
        }
    }
}