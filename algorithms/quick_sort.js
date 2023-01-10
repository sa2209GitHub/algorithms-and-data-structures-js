/**
 *      Quick Sort
 */

const { generateArray } = require('../helpers/array_generator')
const { swap } = require('../helpers/swap_two_array_elements')

// This function takes last element as pivot, places
// the pivot element at its correct position in sorted
// array, and places all smaller (smaller than pivot)
// to left of pivot and all greather elements to right
// of pivot
const partition = (array, low, high) => {

}

const quickSort = array => {
    return array
}



const arr = generateArray(0, 29, true)
console.log(arr)
swap(arr, 0, arr.length - 1)
console.log(arr)

module.exports = {
    quickSort
}