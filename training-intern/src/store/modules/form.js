import { formFirst, formSecond, formThird } from '@/components/exam3/components/formData.js'
export default {
    namespaced: true,
    state: {
        formData: [
            {
                id: 99,
                step: 1,
                title: 'Thông tin cá nhân',
                data: formFirst,
                status: []
            },
            {
                id: 98,
                step: 2,
                title: "Kinh nghiệm làm việc",
                data: formSecond,
                status: []
            },
            {
                id: 97,
                step: 3,
                title: "Xác nhận thông tin",
                data: formThird,
                status: []
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