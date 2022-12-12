import { formFirst, formSecond, formThird } from '@/components/exam3/components/form.js'

export default {
    namespaced: true,
    state: {
        formData: [
            {
                id: "1",
                step: 1,
                data: formFirst,
                completed: false
            },
            {
                id: "2",
                step: 2,
                data: formSecond,
                completed: false
            },
            {
                id: "3",
                step: 3,
                data: formThird,
                completed: false
            },
        ]
    },
    getters: {
        getFormData: state => state.formData
    },
    actions: {
        addForm({ commit }, payload) {
            commit('ADD_FORM', payload)
        },
        deleteForm({ commit }, id) {
            commit('DELETE_FORM', id)
        }
    },
    mutations: {
        ADD_FORM(state, payload) {
            state.formData.push(payload)
        },
        DELETE_FORM(state, id) {
            state.formData = state.formData.filter(item => item.id !== id)
        }
    }
}