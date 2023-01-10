/**
 *      Bubble Sort
 */

const { generateArray } = require('../helpers/array_generator')
const { generateRandomizedArray } = require('../helpers/randomized_array_generator')
const { swap } = require('../helpers/generic_swap')

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

const arr = generateRandomizedArray(-10, 10, 99)
console.log(bubbleSort(arr))