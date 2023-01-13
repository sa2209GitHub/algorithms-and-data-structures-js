/**
 *      Insertion Sort
 */

const { generateArray } = require('../helpers/array_generator')
const { generateRandomizedArray } = require('../helpers/randomized_array_generator')
const { swap } = require('../helpers/generic_swap')

const insertionSort = (array, descending = false) => {
    for (let i = 1; i < array.length; i++) {
        let value = array[i]
        let j = i

        while (j > 0 && descending ? array[j - 1] < value : array[j - 1] > value) {
            array[j] = array[j - 1]
            j--
        }

        array[j] = value
    }

    return array
}

module.exports = {
    insertionSort
}