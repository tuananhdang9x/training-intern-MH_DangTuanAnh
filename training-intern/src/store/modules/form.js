import { formFirst, formSecond, formThird } from '@/components/exam3/components/formData.js'
export default {
    namespaced: true,
    state: {
        formData: [
            {
                id: "1",
                step: 1,
                title: 'Thông tin cá nhân',
                data: formFirst,
                completed: false
            },
            {
                id: "2",
                step: 2,
                title: "Kinh nghiệm làm việc",
                data: formSecond,
                completed: false
            },
            {
                id: "3",
                step: 3,
                title: "Xác nhận thông tin",
                data: formThird,
                completed: false
            },
        ],
        dataExport: {}
    },
    getters: {
        getMultiForm: state => state.formData,
        getDataExport: state => state.dataExport
    },
    actions: {
        exportData({ commit }, payload) {
            commit('EXPORT_DATA', payload)
        }
    },
    mutations: {
        EXPORT_DATA(state, payload) {
            state.dataExport = payload
        }
    }
}