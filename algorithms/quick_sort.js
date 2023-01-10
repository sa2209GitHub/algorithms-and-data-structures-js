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

    return [...quickSort(left), ...middle, ...quickSort(right)]
}

const quickSortV2 = array => {
    if (array.length <= 1) return array

    const pivot = array[array.length - 1]
    const left = []
    const middle = []
    const right = []

    let l = 0; let m = 0; let r = 0

    for (const item of array) {
        switch(true) {
            case item < pivot: left[l] = item;      l++;    break
            case item > pivot: right[r] = item;     r++;    break
            default: middle[m] = item;              m++
        }
    }

    return [...quickSortV2(left), ...middle, ...quickSortV2(right)]
}

const quickSortV3 = (array, low = 0, high = array.length - 1) => {
    if (low < high) {
        const pivot = partition(array, low, high)
        quickSortV3(array, low, pivot - 1)
        quickSortV3(array, pivot + 1, high)
    }

    return array
}

const partition = (array, low = 0, high = array.length - 1) => {
    let pivot = array[high];    
    let i = low - 1

    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++
            swap(array, i, j)
        }
    }
    swap(array, i + 1, high);
    return i + 1
}

module.exports = {
    quickSort,
    quickSortV2,
    quickSortV3
}