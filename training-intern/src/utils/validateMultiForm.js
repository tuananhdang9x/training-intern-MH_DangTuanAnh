import { updateDate } from "@/utils/index.js";

export function validateRequireItem(item) {
    if (item.value === "") {
        item.errorMsg = "this field is required";
    } else {
        item.errorMsg = "";
    }
}

export function validateMaxLength(item) {
    if (item.value.length > item.wordLimit) {
        item.errorMsg = "maximum " + item.wordLimit + " characters allowed";
    }
}

export function validateDoB(item) {
    let today = new Date();
    if (item.value > updateDate(today)) {
        item.errorMsg = "the date should be before today";
    } else {
        item.errorMsg = "";
    }
}

export function validateSalary(item) {
    if (isNaN(item.value)) {
        item.errorMsg = "invalid number"
    } else if (item.value.length > 10) {
        item.errorMsg = "maximum 10 characters are required"
    }
}

export function validateNextStep(stepData) {
    let isCheck = true;
    stepData.data.forEach(list => {
        list.forEach(item => {
            if (item.requireItem === true) {
                if (item.value === "" || item.value.from === "" || item.value.to === "") {
                    isCheck = false;
                }
                if (item.errorMsg) {
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
    if (item.value.from > updateDate(today) || item.value.to > updateDate(today)) {
        item.errorMsg = "the date should be before today"
        isCheck = false;
    } else if (item.value.from > item.value.to && item.value.to !== "") {
        item.errorMsg = "the end date cannot be before the start date"
        isCheck = false
    } else if (item.value.from === item.value.to) {
        item.errorMsg = "invalid date"
        isCheck = false
    } else {
        item.errorMsg = ""
    }

    return isCheck;
}

export function validateDateConflict(stepData, id) {
    if (stepData.data.length > 1) {
        let isConflict = false;
        for (let i = 0; i < stepData.data.length; i++) {
            for (let j = 1; j < stepData.data.length; j++) {
                let itemI = stepData.data[i].filter(item => item.id === id)[0]
                let itemJ = stepData.data[j].filter(item => item.id === id)[0]
                if (itemI.value.from && itemJ.value.from !== "" && i < j) {
                    if (itemI.value.from <= itemJ.value.to && itemJ.value.from <= itemI.value.to) {
                        itemI.errorMsg = "the date conflict was found"
                        itemJ.errorMsg = "the date conflict was found"
                        isConflict = true;
                        scrollError();
                    } else {
                        itemI.errorMsg = ""
                        itemJ.errorMsg = ""
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






