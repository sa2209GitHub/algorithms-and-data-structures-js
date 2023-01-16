/**
 *      Merge Sort
 */

const { generateArray } = require('../helpers/array_generator')
const { generateRandomizedArray } = require('../helpers/randomized_array_generator')
const { swap } = require('../helpers/generic_swap')

const mergeSort = (array, descending = false) => {
    if (array.length > 1) {
        let middle = Math.round(array.length / 2)
        let left = array.slice(0, middle)
        let right = array.slice(middle)

        mergeSort(left, descending)
        mergeSort(right, descending)

        let i = 0;  let j = 0; let k = 0

        while (i < left.length && j < right.length) {
            if (descending ? left[i] >= right[j] : left[i] <= right[j]) {
                array[k] = left[i];     i++
            } else {
                array[k] = right[j];    j++ 
            }
            k++
        }

        while (i < left.length) {
            array[k] = left[i]
            i++;    k++
        }
        while (j < right.length) {
            array[k] = right[j]
            j++;    k++
        }
    }

    return array
}

module.exports = {
    mergeSort
}