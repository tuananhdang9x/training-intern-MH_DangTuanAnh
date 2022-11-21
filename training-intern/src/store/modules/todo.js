export default {
    namespaced: true,
    state: {
        todos: [
        ],
        addTodo: {
            isAdd: false
        },

    },
    getters: {
        getTodo: state => state.todos,
        addTodo: state => state.addTodo.isAdd,

    },

    actions: {
        toggleInput({ commit }) {
            commit('TOGGLE_INPUT')
        },
        saveTodo({ commit }, newTodo) {
            commit('SAVE_TODO', newTodo)
        },
    },
    mutations: {
        TOGGLE_INPUT(state) {
            state.addTodo.isAdd = !state.addTodo.isAdd
        },
        SAVE_TODO(state, newTodo) {
            state.todos.unshift(newTodo)
        },

    }
}