import { FILE_TYPE } from '@/const/index.js'
export function validateDuplicate(file, listFile) {
    let isCheck = true;
    listFile.forEach(item => {
        if (item === file.name) {
            isCheck = false;
        }
    })
    return isCheck;
}

export function validateFileSize(file, MAX_SIZE) {
    return file.size <= MAX_SIZE
}

export function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}


export function validateExtension(name) {
    const pdf = new RegExp("([a-zA-Z0-9s_\\.-:])+(.pdf)$");
    const excel = new RegExp("([a-zA-Z0-9s_\\.-:])+(.xls|.xlsx|.csv)$");
    const word = new RegExp("([a-zA-Z0-9s_\\.-:])+(.doc|.docx)$");
    if (excel.test(name.toLowerCase())) {
        return FILE_TYPE.EXCEL;
    } else if (pdf.test(name.toLowerCase())) {
        return FILE_TYPE.PDF;
    } else if (word.test(name.toLowerCase())) {
        return FILE_TYPE.WORD;
    } else {
        return FILE_TYPE.OTHER;
    }
}

export function validateLimitExtention(name, LIST_EXTENTIONS) {
    console.log(LIST_EXTENTIONS)
    let isCheck = false;
    if (LIST_EXTENTIONS.length !== 0) {
        LIST_EXTENTIONS.forEach(item => {
            if (name.endsWith(item)) {
                isCheck = true
            }
        })
    }
    return isCheck
} ``

export function convertMBtoBytes(Mb) {
    return Mb * 1048576
}