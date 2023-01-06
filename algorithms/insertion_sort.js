/**
 *      Insertion Sort
 */

const { generateNumericArray } = require('../helpers/numeric_array_generator')

const insertionSort = array => {
    for (let i = 1; i < array.length; i++) {
        let j = i
        while (j > 0 && array[j - 1] > array[j]) {
            [array[j], array[j - 1]] = [array[j - 1], array[j]]
            j--
        }
    }
    return array
}

module.exports = {
    insertionSort
}