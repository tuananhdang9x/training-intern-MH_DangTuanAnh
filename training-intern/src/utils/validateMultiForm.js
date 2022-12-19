import { updateDate } from "@/utils/index.js";

export function validateForm(stepData) {
    if (stepData.step === 1) {
        let isCheck = true;
        let getInputText = stepData.data[0].filter(
            (item) => item.inputType === "inputText"
        )[0];

        let checkValueText = getInputText.value;
        if (!!checkValueText === false) {
            getInputText.errorMsg = "this field is required";
        }

        let checkMsgText = getInputText.errorMsg;
        if (!!checkMsgText === true) {
            isCheck = false;
        }

        let getInputDob = stepData.data[0].filter(
            (item) => item.inputType === "inputDob"
        )[0];
        let checkValueDob = getInputDob.value;
        if (!!checkValueDob === false) {
            getInputDob.errorMsg = "this field is required";
        }
        let checkMsgDob = getInputDob.errorMsg;

        if (!!checkMsgDob === true) {
            isCheck = false;
        }

        let getInputDesc = stepData.data[0].filter(
            (item) => item.inputType === "inputDescription"
        )[0];
        let checkMsgDesc = getInputDesc.errorMsg;
        if (!!checkMsgDesc === true) {
            isCheck = false;
        }

        return isCheck;
    }

    if (stepData.step === 2) {
        let isCheck = true;
        stepData.data.forEach(item => {
            if (item[1].value === "") {
                item[1].errorMsg = "this field is required";
            } else {
                item.errorMsg = "";
            }
            if (!!item[1].errorMsg === true) {
                isCheck = false;
            }
            if (item[2].value.from === "" || item[2].value.to === "") {
                item[2].errorMsg = "this field is required";
            }
            if (!!item[2].errorMsg === true) {
                isCheck = false;
            }
            if (!!item[3].errorMsg === true) {
                isCheck = false;
            }
        })
        return isCheck;
    }

    if (stepData.step === 3) {
        let isCheck = true;

        let getInputDesc = stepData.data[0].filter(
            (item) => item.inputType === "inputDescription"
        )[0];

        if (getInputDesc.value === "") {
            getInputDesc.errorMsg = "this field is required"
            isCheck = false;
        } else {
            getInputDesc.errorMsg = ""
        }
        let checkMsgDesc = getInputDesc.errorMsg;
        if (!!checkMsgDesc === true) {
            isCheck = false;
        }
        let getInputSalary = stepData.data[0][1];

        if (getInputSalary.value === "") {
            getInputSalary.errorMsg = "this field is required"
            isCheck = false;
        } else if (getInputSalary.value.length > 10) {
            getInputSalary.errorMsg = "maximum 10 characters are required"
            isCheck = false;
        } else if (isNaN(getInputSalary.value)) {
            getInputSalary.errorMsg = "invalid number"
            isCheck = false;
        } else {
            getInputSalary.errorMsg = ""
        }

        if (!!getInputSalary.errorMsg === true) {
            isCheck = false;
        }
        return isCheck;
    }
}

export function validateNextStep(data) {
    data.completed = true
    switch (data.step) {
        case 1:
            data.completed = validateForm(data);
            break;
        case 2:
            if (validateListCompany(data) === false) {
                data.completed = false;
            }
            if (validateForm(data) === false) {
                data.completed = false;
            }
            break;
        default:
            console.log("Invalid step");
            break;
    }
    return data.completed;
}

export function validateListCompany(stepData) {
    let isCheck = true;
    stepData.data.forEach(item => {
        if (item[0].value === "") {
            item[0].errorMsg = "this field is required";
        } else {
            item[0].errorMsg = "";
        }

        if (!!item[0].errorMsg === true) {
            isCheck = false;
            stepData.completed = false;
        }
    })
    return isCheck;
}
export function validateCompany(stepData, index) {
    let isCheck = true;
    let checkCompany = stepData.data[index][0]
    if (checkCompany.value === "") {
        checkCompany.errorMsg = "this field is required";
    } else {
        checkCompany.errorMsg = "";
    }

    if (!!checkCompany.errorMsg === true) {
        isCheck = false;
        stepData.completed = false;
    }
    return isCheck;
}

export function validateInputText(stepData, keyword, step, index) {

    let isCheck = true;

    if (step === 1) {
        let getInputText = stepData.data[0][0]
        if (keyword === "") {
            getInputText.errorMsg = "this field is required";
            isCheck = false
            stepData.completed = false;
        } else if (keyword.length > 100) {
            getInputText.errorMsg = "maximum 100 characters allowed";
            isCheck = false
            stepData.completed = false;
        } else {
            getInputText.errorMsg = "";
        }
    } else {
        let getInputText = stepData.data[index].filter(
            (item) => item.inputType === "inputText"
        )[0];
        if (keyword === "") {
            getInputText.errorMsg = "this field is required";
            isCheck = false
            stepData.completed = false;
        } else if (keyword.length > 100) {
            getInputText.errorMsg = "maximum 100 characters allowed";
            isCheck = false;
            stepData.completed = false;
        } else {
            getInputText.errorMsg = "";
        }
    }
    return isCheck;
}

export function validateDoB(stepData, value) {
    let today = new Date();

    if (value > updateDate(today)) {
        stepData.data[0][1].errorMsg = "the date should be before today";
    } else {
        stepData.data[0][1].errorMsg = "";
    }

    stepData.data[0][1].value = value;
}

export function validateDesc(stepData, keyword, step, index) {
    if (step === 1 || step === 3) {
        if (keyword.length > 1000) {
            stepData.data[0].filter(
                (item) => item.inputType === "inputDescription"
            )[0].errorMsg = "maximum 1000 characters allowed";
        } else {
            stepData.data[0].filter(
                (item) => item.inputType === "inputDescription"
            )[0].errorMsg = "";
        }

        stepData.data[0].filter(
            (item) => item.inputType === "inputDescription"
        )[0].value = keyword;
    } else {
        if (keyword.length > 5000) {
            stepData.data[index][3].errorMsg = "maximum 5000 characters allowed";
        } else {
            stepData.data[index][3].errorMsg = "";
        }

        stepData.data[index][3].value = keyword;
    }
}

export function validateDate(stepData, index) {
    let today = new Date();
    let isCheck = true;

    let date = stepData.data[index][2].value;
    if (date.from && date.to !== "") {
        if (date.from > updateDate(today) || date.to > updateDate(today)) {
            stepData.data[index][2].errorMsg = "the date should be before today"
            isCheck = false;
            stepData.completed = false;
        } else if (date.from > date.to) {
            stepData.data[index][2].errorMsg = "the end date cannot be before the start date"
            isCheck = false;
            stepData.completed = false;
        } else if (date.from === date.to) {
            stepData.data[index][2].errorMsg = "invalid date"
            isCheck = false;
            stepData.completed = false;
        } else {
            stepData.data[index][2].errorMsg = ""
        }
    }

    let isConflict = false;
    if (stepData.data.length > 1 && isCheck) {
        for (let i = 0; i < stepData.data.length; i++) {
            for (let j = 1; j < stepData.data.length; j++) {
                let itemI = stepData.data[i][2].value
                let itemJ = stepData.data[j][2].value
                if (itemI.from && itemJ.from !== "" && i !== j) {
                    if (itemI.from <= itemJ.to && itemJ.from <= itemI.to) {
                        stepData.data[i][2].errorMsg = "the date conflict was found"
                        stepData.data[j][2].errorMsg = "the date conflict was found"
                        stepData.completed = false;
                        isConflict = true;
                    } else {
                        stepData.data[i][2].errorMsg = ""
                        stepData.data[j][2].errorMsg = ""
                    }
                }
            }
        }
    }
    return isConflict;
}







