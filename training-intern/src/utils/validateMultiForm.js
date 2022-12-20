import { updateDate } from "@/utils/index.js";

export function validateLastForm(stepData) {
    console.log('active here')
    console.log(stepData)
    let isValid = true
    let count = 0;
    stepData.data.forEach(list => {
        list.forEach(item => {
            if (item.requireItem === true) {
                count++
            }
        })
    })
    console.log(count)
    if (stepData.status.length < count) {
        isValid = false;
    } else {
        stepData.status.forEach(item => {
            if (item.completed === false) {
                isValid = false
            }
        })
    }
    console.log(isValid)
    return isValid
}

export function validateNextStep(stepData, step) {
    let isValid = true
    switch (step) {
        case 1: {
            let count = 0;
            stepData.data[step - 1].forEach(item => {
                if (item.requireItem === true) {
                    count++
                }
            })
            if (stepData.status.length < count) {
                isValid = false;
            } else {
                stepData.status.forEach(item => {
                    if (item.completed === false) {
                        isValid = false
                    }
                })
            }
        }
            break;
        case 2: {
            let count = 0;
            stepData.data.forEach(list => {
                list.forEach(item => {
                    if (item.requireItem === true) {
                        count++
                    }
                })
            })
            if (stepData.status.length < count) {
                isValid = false;
            } else {
                stepData.status.forEach(item => {
                    if (item.completed === false) {
                        isValid = false
                    }
                })
            }
        }
            break;
        default:
            console.log("Invalid step");
            break;
    }
    return isValid;
}

export function validateSalary(stepData, salary, index, id) {
    console.log(stepData, salary, index, id)
    let isCheck = true;
    let inputSalary = stepData.data[index].filter(item => item.id === id)[0];
    console.log('inputSalary', inputSalary)
    inputSalary.value = salary

    if (salary === "") {
        inputSalary.errorMsg = "this field is required"
        isCheck = false;
    } else if (isNaN(salary)) {
        inputSalary.errorMsg = "invalid number"
        isCheck = false;
    } else if (salary.length > 10) {
        inputSalary.errorMsg = "maximum 10 characters are required"
        isCheck = false;
    } else {
        inputSalary.errorMsg = ""
    }

    addStatus(stepData, id, isCheck, index)
    return isCheck
}

export function validateCompany(stepData, value, id, index) {
    let isCheck = true
    let inputCompany = stepData.data[index].filter(item => item.id === id)[0]
    inputCompany.value = value
    if (value === "") {
        inputCompany.errorMsg = "this field is required";
        isCheck = false
    } else {
        inputCompany.errorMsg = "";
    }

    addStatus(stepData, id, isCheck, index)
    return isCheck;
}

export function validateInputText(stepData, keyword, step, index, id) {
    let isCheck = true;
    switch (step) {
        case 1: {
            let inputText = stepData.data[index].filter(item => item.id === id)[0]
            inputText.value = keyword
            if (keyword === "") {
                inputText.errorMsg = "this field is required";
                isCheck = false
            } else if (keyword.length > 100) {
                inputText.errorMsg = "maximum 100 characters allowed";
                isCheck = false
            } else {
                inputText.errorMsg = "";
            }
            break;
        }

        case 2: {

            let inputText = stepData.data[index].filter(
                (item) => item.id === id
            )[0];
            inputText.value = keyword
            if (keyword === "" && inputText.value === "") {
                inputText.errorMsg = "this field is required";
                isCheck = false
            } else if (keyword.length > 100) {
                inputText.errorMsg = "maximum 100 characters allowed";
                isCheck = false;
            } else {
                inputText.errorMsg = "";
            }
            break;
        }
        default:
            console.log('Invalid step')
            break;
    }
    addStatus(stepData, id, isCheck, index)
    return isCheck
}

export function validateDoB(stepData, value, index, id) {
    let isCheck = true;
    let today = new Date();
    let dateOfBirth = stepData.data[index].filter(item => item.id === id)[0]
    dateOfBirth.value = value
    if (dateOfBirth.value === "") {
        dateOfBirth.errorMsg = "this field is required";
        isCheck = false
    } else if (value > updateDate(today)) {
        dateOfBirth.errorMsg = "the date should be before today";
        isCheck = false
    } else {
        dateOfBirth.errorMsg = "";
    }
    dateOfBirth.value = value;
    addStatus(stepData, id, isCheck, index)
    return isCheck;
}

export function validateDesc(stepData, keyword, step, index, id) {
    let isCheck = true
    switch (step) {
        case 1: {
            let inputDesc = stepData.data[index].filter(item => item.id === id)[0]
            inputDesc.value = keyword
            if (keyword.length > 1000) {
                inputDesc.errorMsg = "maximum 1000 characters allowed";
                isCheck = false
            } else {
                inputDesc.errorMsg = "";
            }
            break;
        }
        case 2: {
            stepData.data.forEach(item => {
                let inputDesc = item.filter(item => item.id === id)[0]
                inputDesc.value = keyword
                if (keyword.length > 5000) {
                    inputDesc.errorMsg = "maximum 5000 characters allowed";
                    isCheck = false
                } else {
                    inputDesc.errorMsg = "";
                }
            })
            break;
        }
        case 3: {
            let inputDesc = stepData.data[index].filter(item => item.id === id)[0]
            inputDesc.value = keyword
            if (keyword.length > 1000) {
                inputDesc.errorMsg = "maximum 1000 characters allowed";
                isCheck = false
            } else {
                inputDesc.errorMsg = "";
            }
            break;
        }
        default:
            console.log('Invalid step')
            break;
    }
    addStatus(stepData, id, isCheck, index)
    return isCheck;
}

export function validateDate(stepData, index, id) {
    let today = new Date();
    let isCheck = true;
    stepData.data.forEach(item => {
        let inputDate = item.filter(item => item.id === id)[0]

        if (inputDate.value.from === "" && inputDate.value.to === "") {
            inputDate.errorMsg = "this field is required"
            isCheck = false
        } else {
            if (inputDate.value.from > updateDate(today) || inputDate.value.to > updateDate(today)) {
                inputDate.errorMsg = "the date should be before today"
                isCheck = false;
            } else if (inputDate.value.from > inputDate.value.to && inputDate.value.to !== "") {
                inputDate.errorMsg = "the end date cannot be before the start date"
                isCheck = false;
            } else if (inputDate.value.from === inputDate.value.to) {
                inputDate.errorMsg = "invalid date"
                isCheck = false;
            } else {
                inputDate.errorMsg = ""
            }
        }
    })
    let isConflict = false;
    if (stepData.data.length > 1 && isCheck) {
        for (let i = 0; i < stepData.data.length; i++) {
            for (let j = 1; j < stepData.data.length; j++) {
                let itemI = stepData.data[i].filter(item => item.id === id)[0]
                let itemJ = stepData.data[j].filter(item => item.id === id)[0]
                if (itemI.value.from && itemJ.value.from !== "" && i < j) {
                    if (itemI.value.from <= itemJ.value.to && itemJ.value.from <= itemI.value.to) {
                        itemI.errorMsg = "the date conflict was found"
                        itemJ.errorMsg = "the date conflict was found"
                        isCheck = false
                        isConflict = true
                    }
                }
            }
        }
    }
    addStatus(stepData, id, isCheck, index)
    return isConflict;
}

function addStatus(stepData, id, isCheck, index) {
    if (stepData.status.length > 0) {
        let isDuplicate = false;
        stepData.status.forEach(item => {
            if (item.id === "A" + index + id) {
                if (item.completed !== isCheck) {
                    item.completed = isCheck
                }
                isDuplicate = true
            }
        })
        if (!isDuplicate) {
            stepData.status.push({
                id: "A" + index + id,
                completed: isCheck
            })
        }
    } else {
        stepData.status.push({
            id: "A" + index + id,
            completed: isCheck
        })
    }
}







