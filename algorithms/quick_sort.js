/**
 *      Quick Sort
 */

const { generateArray } = require('../helpers/array_generator')
const { generateRandomizedArray } = require('../helpers/randomized_array_generator')
const { swap } = require('../helpers/generic_swap')

// QuickSort (v1)
const quickSort = (array, descending = false, low = 0, high = array.length - 1) => {
    if (high - low > 0) {
        let pivot = array[high]
        let i = low - 1
        let j = high

        while (true) {
            while (descending ? array[++i] > pivot : array[++i] < pivot) {}
            while (descending ? array[--j] < pivot : array[--j] > pivot) {}
            if (i >= j) break
            swap(array, i, j)
        }

        array[high] = array[i]
        array[i] = pivot

        quickSort(array, descending, low, i - 1)
        quickSort(array, descending, i + 1, high)
    }

    return array
}

// QuickSort (v2)
const quickSortV2 = (array, descending = false, low = 0, high = array.length - 1) => {
    if (low < high) {
        const pivot = partition(array, descending, low, high)
        quickSortV2(array, descending, low, pivot - 1)
        quickSortV2(array, descending, pivot + 1, high)
    }

    return array
}

const partition = (array, descending = false, low = 0, high = array.length - 1) => {
    let pivot = array[high];    
    let i = low - 1

    for (let j = low; j < high; j++) {
        if (descending ? array[j] > pivot : array[j] < pivot) {
            i++
            swap(array, i, j)
        }
    }
    swap(array, i + 1, high);
    return i + 1
}

module.exports = {
    quickSort,
    quickSortV2
}
