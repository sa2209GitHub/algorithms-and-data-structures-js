/**
 *      Insertion Sort
 */

const { generateArray } = require('../helpers/array_generator')
const { generateRandomizedArray } = require('../helpers/randomized_array_generator')
const { swap } = require('../helpers/generic_swap')

const insertionSort = array => {
    for (let i = 1; i < array.length; i++) {
        let j = i
        while (j > 0 && array[j - 1] > array[j]) {
            swap(array, j, j - 1)
            j--
        }
    }
    
    return array
}

module.exports = {
    insertionSort
}