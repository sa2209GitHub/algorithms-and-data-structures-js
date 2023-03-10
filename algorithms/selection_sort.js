/**
 *      Selection Sort
 */

const { generateArray } = require('../helpers/array_generator')
const { generateRandomizedArray } = require('../helpers/randomized_array_generator')
const { swap } = require('../helpers/generic_swap')

const selectionSort = (array, descending = false) => {
    for (let i = 0; i < array.length; i++) {
        let min = i
        
        for (let j = i + 1; j < array.length; j++) {
            if (descending ? array[j] > array[min] : array[j] < array[min])
                min = j
        }

        swap(array, i, min)
    }

    return array
}

module.exports = {
    selectionSort
}