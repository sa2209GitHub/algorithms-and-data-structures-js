/**
 *      Merge Sort
 */

const { generateArray } = require('../helpers/array_generator')
const { generateRandomizedArray } = require('../helpers/randomized_array_generator')
const { swap } = require('../helpers/generic_swap')

const mergeSort = array => {
    if (array.length > 1) {
        let mid = Math.round(array.length / 2)
        let left = array.slice(0, mid)
        let right = array.slice(mid)

        mergeSort(left)
        mergeSort(right)

        let i = 0;  let j = 0; let k = 0

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
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
