/**
 *      Bubble Sort
 */

const { generateArray } = require('../helpers/array_generator')
const { generateRandomizedArray } = require('../helpers/randomized_array_generator')
const { swap } = require('../helpers/generic_swap')

const bubbleSort = (array, descending = false) => {    
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (descending ? array[j] < array[j + 1] : array[j] > array[j + 1]) {
                swap(array, j, j + 1)
            }
        }
    }
    
    return array
}

const bubbleSortV2 = (array, descending = false) => {
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (descending ? array[j] < array[j + 1] : array[j] > array[j + 1]) {
                swap(array, j, j + 1)
            }
        }
    }

    return array
}

const bubbleSortV3 = (array, descending = false) => {
    let exchanged = true
    for (let i = array.length - 1; i > 0 && exchanged; i--) {
        exchanged = false
        for (let j = 0; j < i; j++) {
            if (descending ? array[j] < array[j + 1] : array[j] > array[j + 1]) {
                exchanged = true
                swap(array, j, j + 1)
            }
        }
    }

    return array
}

module.exports = {
    bubbleSort,
    bubbleSortV2,
    bubbleSortV3
}