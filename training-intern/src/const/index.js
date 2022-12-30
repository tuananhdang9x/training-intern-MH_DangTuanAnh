import { convertMBtoBytes } from '@/utils/validate.js'

export const FILE_TYPE = {
    EXCEL: 1,
    PDF: 2,
    WORD: 3,
    OTHER: 4
}
export const maxSize = convertMBtoBytes(10);

export const listExtentions = ['.jpg', '.jpeg', '.png', '.svg', '.avif']
