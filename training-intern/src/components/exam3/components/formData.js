import { LIST_COMPANY } from '@/const/multiForm.js'

export const formFirst = [
    [
        {
            id: 1,
            inputType: "inputText",
            title: "Họ và tên",
            key: "your_name",
            value: "",
            errorMsg: "",
            wordLimit: 100,
            requireItem: true
        },
        {
            id: 2,
            inputType: "inputDob",
            title: "Ngày sinh",
            key: "your_birthDay",
            value: "",
            errorMsg: "",
            requireItem: true
        },
        {
            id: 3,
            inputType: "inputCity",
            title: "Thành phố",
            key: "your_city",
            value: "",
            errorMsg: "",
            requireItem: false
        },
        {
            id: 4,
            inputType: "inputJobPosition",
            title: "Vị trí làm việc",
            description: "Có thể chọn được nhiều vị trí mà bạn muốn làm việc",
            key: "apply_job_position",
            value: [],
            errorMsg: "",
            requireItem: false
        },
        {
            id: 5,
            inputType: "inputDescription",
            title: "Mô tả về bản thân",
            key: "your_info",
            wordLimit: 1000,
            value: "",
            errorMsg: "",
            requireItem: false
        },
        {
            id: 6,
            inputType: "inputImage",
            title: "Ảnh cá nhân",
            key: "your_photo",
            placeholder: "Hãy kéo và thả ảnh vào đây hoặc",
            triggerText: "nhấn vào đây",
            value: [],
            requireItem: false
        },
    ],
]

export const formDefault = [
    {
        id: 7,
        inputType: "inputListCompany",
        listOption: LIST_COMPANY,
        key: "chosen_company",
        value: "",
        errorMsg: "",
        requireItem: true
    },
    {
        id: 8,
        inputType: "inputText",
        title: "Vị trí từng làm",
        key: "prev_job_position",
        wordLimit: 100,
        value: "",
        errorMsg: "",
        requireItem: true
    },
    {
        id: 9,
        inputType: "inputWorkPeriod",
        title: "Thời gian làm việc",
        key: "working_period",
        value: { from: "", to: "" },
        errorMsg: "",
        requireItem: true
    },
    {
        id: 10,
        inputType: "inputDescription",
        title: "Mô tả về công việc",
        wordLimit: 5000,
        key: "job_description",
        value: "",
        errorMsg: "",
        requireItem: false
    },
]

export const formThird = [
    [
        {
            id: 11,
            inputType: "inputDescription",
            title: "Lý do muốn ứng tuyển vào công ty",
            wordLimit: 1000,
            key: "apply_purposes",
            value: "",
            errorMsg: "",
            requireItem: true
        },
        {
            id: 12,
            inputType: "inputSalary",
            title: "Mức lương mong muốn",
            key: "salary_expectation",
            value: "",
            errorMsg: "",
            requireItem: true
        }
    ]
]
export const formSecond = [JSON.parse(JSON.stringify(formDefault))]


