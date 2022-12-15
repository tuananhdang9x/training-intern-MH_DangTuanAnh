import { formFirst, formSecond, formThird } from '@/components/exam3/components/formData.js'

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
        ],
        dataExport: {}
    },
    getters: {
        getFormData: state => state.formData,
        getDataExport: state => state.dataExport
    },
    actions: {

    },
    mutations: {

    }
}