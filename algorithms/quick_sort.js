/**
 *      Quick Sort
 */

const { generateArrat } = require('../helpers/array_generator')
const { generateRandomizedArray } = require('../helpers/randomized_array_generator')
const { swap } = require('../helpers/generic_swap')

const quickSort = array => {
    if (array.length <= 1) return array

    let pivot = array[array.length - 1]
    let left = array.filter(el => el < pivot)
    let middle = array.filter(el => el === pivot)
    let right = array.filter(el => el > pivot)

    return [ ...quickSort(left), ...middle, ...quickSort(right) ]
}

module.exports = {
    quickSort
}