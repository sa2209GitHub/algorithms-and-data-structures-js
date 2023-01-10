/**
 *      Bubble Sort
 */

const { generateArray } = require('../helpers/array_generator')
const { swap } = require('../helpers/swap_two_array_elements')

const bubbleSort = array => {    
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1)
            }
        }
    }
    
    return array
}

module.exports = {
    bubbleSort
}