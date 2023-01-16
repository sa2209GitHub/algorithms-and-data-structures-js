/**
 *      Heap Sort
 */

const { generateArray } = require('../helpers/array_generator')
const { generateRandomizedArray } = require('../helpers/randomized_array_generator')
const { swap } = require('../helpers/generic_swap')

const heapSort = (array, descending = false) => {
    const length = array.length

    // Build heap (rearrange array)
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        heapify(array, descending, length, i)
    }

    // One by one extract an element from heap
    for (let i = length - 1; i > 0; i--) {
        swap(array, 0, i)

        // Call max heapify on the reduced heap
        heapify(array, descending, i, 0)
    }

    return array
}

// To heapify a subtree rooted with node which is an index in array[].
// size is size of heap 
const heapify = (array, descending = false, size, node) => {
    let root = node
    let left = node * 2 + 1
    let right = node * 2 + 2

    if (descending ? left < size && array[left] < array[root] : left < size && array[left] > array[root]) {
        root = left
    }

    if (descending ? right < size && array[right] < array[root] : right < size && array[right] > array[root]) {
        root = right
    }

    // If root is not root
    if (root !== node) {
        swap(array, node, root)

        // Recursively heapify the affected sub-tree
        heapify(array, descending, size, root)
    }
}

module.exports = {
    heapSort
}