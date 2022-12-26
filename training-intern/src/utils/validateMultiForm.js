import { updateDate } from "@/utils/index.js";

export function validateRequireItem(item) {
    if (item.value === "") {
        item.errorMsg = "this field is required";
        scrollError()
    }
}

export function validateMaxLength(item) {
    if (item.value.length > item.wordLimit) {
        item.errorMsg = "maximum " + item.wordLimit + " characters allowed";
        scrollError()
    }
}

export function validateDoB(item) {
    let today = new Date();
    if (item.value > updateDate(today)) {
        item.errorMsg = "the date should be before today";
        scrollError()
    }
}

export function validateSalary(item) {
    if (isNaN(item.value)) {
        item.errorMsg = "invalid number"
        scrollError()
    } else if (item.value.length > 10) {
        item.errorMsg = "maximum 10 characters are required"
        scrollError()
    }
}

export function validateNextStep(stepData) {
    let isCheck = true
    if (stepData.data.length === 0) {
        isCheck = false
    }
    stepData.data.forEach(list => {
        list.forEach(item => {
            if (item.requireItem === true) {
                if (item.value === "" || item.value.from === "" || item.value.to === "" || item.errorMsg) {
                    isCheck = false
                }
            } else {
                if (item.errorMsg) {
                    isCheck = false
                }
            }
        })
    })
    return isCheck
}

export function validateDate(item) {
    let today = new Date();
    let isCheck = true
    if (item.value.from === "" || item.value.to === "") {
        item.errorMsg = "this field is required"
        scrollError()
        isCheck = false;
    } else if (item.value.from > updateDate(today) || item.value.to > updateDate(today)) {
        item.errorMsg = "the date should be before today"
        scrollError()
        isCheck = false;
    } else if (item.value.from > item.value.to && item.value.to !== "") {
        item.errorMsg = "the end date cannot be before the start date"
        scrollError()
        isCheck = false
    } else if (item.value.from === item.value.to) {
        item.errorMsg = "invalid date"
        scrollError()
        isCheck = false
    }
    return isCheck;
}

export function resetErrorDate(stepData, id) {
    for (let i = 0; i < stepData.data.length; i++) {
        let item = stepData.data[i].find(item => item.id === id)
        item.errorMsg = ""
    }
}
export function validateDateConflict(stepData, id) {
    if (stepData.data.length > 1) {
        let isConflict = false;
        for (let i = 0; i < stepData.data.length; i++) {
            for (let j = 1; j < stepData.data.length; j++) {
                let itemI = stepData.data[i].find(item => item.id === id)
                let itemJ = stepData.data[j].find(item => item.id === id)
                if (itemI.value.from && itemJ.value.from !== "" && i < j) {
                    if (itemI.value.from <= itemJ.value.to && itemJ.value.from <= itemI.value.to) {
                        itemI.errorMsg = "the date conflict was found"
                        itemJ.errorMsg = "the date conflict was found"
                        isConflict = true;
                        scrollError();
                    }
                }
            }
        }
        return isConflict
    }
}

function scrollError() {
    setTimeout(() => {
        let el = document.getElementsByClassName("msg")[0].offsetTop;
        window.scrollTo({
            top: el - 300,
            behavior: "smooth",
        });
    }, 1);
}






