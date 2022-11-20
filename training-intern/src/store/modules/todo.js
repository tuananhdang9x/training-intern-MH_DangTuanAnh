export default {
    namespaced: true,
    state: {
        todos: [
        ],
        addTodo: {
            isAdd: false
        },
        completedTodos: [

        ],
        rejectedTodos: [

        ]
    },
    getters: {
        getTodo: state => state.todos,
        addTodo: state => state.addTodo.isAdd,
        completedTodos: state => state.completedTodos,
        rejectedTodos: state => state.rejectedTodos,
    },

    actions: {
        pendingTodo({ commit }) {
            commit('PENDING_TODO')
        },
        saveTodo({ commit }, newTodo) {
            commit('SAVE_TODO', newTodo)
        },
        completeTodo({ commit }, newTodo) {
            console.log(newTodo);
            commit('COMPLETE_TODO', newTodo)
        },
        rejectTodo({ commit }, newTodo) {
            commit('REJECT_TODO', newTodo)
        },
        updateTodo({ commit }, id) {
            commit('UPDATE_TODO', id)
        },
        searchTodo({ commit }, title) {
            commit('SEARCH_TODO', title)
        }
    },
    mutations: {
        PENDING_TODO(state) {
            state.addTodo.isAdd = !state.addTodo.isAdd
        },
        SAVE_TODO(state, newTodo) {
            state.todos.unshift(newTodo)
        },
        COMPLETE_TODO(state, newTodo) {
            state.completedTodos.unshift(newTodo)
            console.log(state.completedTodos)
        },
        REJECT_TODO(state, newTodo) {
            state.rejectedTodos.unshift(newTodo)
        },
        UPDATE_TODO(state, idTodo) {
            state.todos = state.todos.filter(todo => todo.id != idTodo)
        },
        SEARCH_TODO(state, title) {
            state.todos = state.todos.filter(todo => todo.title == title)
            state.completedTodos = state.completedTodos.filter(todo => todo.title == title)
            state.rejectedTodos = state.rejectedTodos.filter(todo => todo.title == title)
        }
    }
}