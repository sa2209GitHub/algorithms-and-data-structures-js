/**
 *      Selection Sort
 */

const { generateNumericArray } = require('../helpers/numeric_array_generator')
const { swap } = require('../helpers/swap_two_array_elements')

const selectionSort = array => {
    for (let i = 0; i < array.length; i++) {
        let min = i
        
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) min = j
        }

        if (min != i) swap(array, i, min)
    }

    return array
}

module.exports = {
    selectionSort
}