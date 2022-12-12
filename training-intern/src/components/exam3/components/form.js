import { LIST_COMPANY } from '@/const/multiForm.js'

const formFirst = [
    {
        id: 1,
        inputType: "inputText",
        title: "Họ và tên",
        requireItem: true
    },
    {
        id: 2,
        inputType: "inputDob",
        title: "Ngày sinh",
        requireItem: true
    },
    {
        id: 3,
        inputType: "inputCity",
        title: "Thành phố",
        requireItem: false
    },
    {
        id: 4,
        inputType: "inputJobPosition",
        title: "Vị trí làm việc",
        description: "Có thể chọn được nhiều vị trí mà bạn muốn làm việc",
        requireItem: false
    },
    {
        id: 5,
        inputType: "inputDescription",
        title: "Mô tả về bản thân",
        requireItem: false,
        wordLimit: 1000
    },
    {
        id: 6,
        inputType: "inputImage",
        title: "Ảnh cá nhân",
        placeholder: "Hãy kéo và thả ảnh vào đây hoặc",
        triggerText: "nhấn vào đây",
        requireItem: false
    },
]

const formSecond = [
    {
        id: 1,
        inputType: "inputListCompany",
        listOption: LIST_COMPANY,
        requireItem: false
    },
    {
        id: 2,
        inputType: "inputText",
        title: "Vị trí từng làm",
        requireItem: true
    },
    {
        id: 3,
        inputType: "inputWorkPeriod",
        title: "Thời gian làm việc",
        requireItem: true,
        value: { from: "", to: "" }
    },
    {
        id: 4,
        inputType: "inputDescription",
        title: "Mô tả về công việc",
        requireItem: false,
        wordLimit: 5000
    }
]

const formThird = [
    {
        id: 1,
        inputType: "inputDescription",
        title: "Lý do muốn ứng tuyển vào công ty",
        requireItem: true,
        wordLimit: 1000
    },
    {
        id: 2,
        inputType: "inputSalary",
        title: "Mức lương mong muốn",
        requireItem: true,
    }
]

export const formData = [
    {
        id: 1,
        step: 1,
        data: formFirst,
        completed: false
    },
    {
        id: 2,
        step: 2,
        data: formSecond,
        completed: false
    },
    {
        id: 3,
        step: 3,
        data: formThird,
        completed: false
    },
]