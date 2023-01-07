/**
 *      Heap Sort
 */

const { generateArray } = require('../helpers/array_generator')

const heapSort = array => {
    const length = array.length

    // Build heap (rearrange array)
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        heapify(array, length, i)
    }

    // One by one extract an element from heap
    for (let i = length - 1; i > 0; i--) {
        [ array[0], array[i] ] = [ array[i], array[0] ]

        // Call max heapify on the reduced heap
        heapify(array, i, 0)
    }

    return array
}

// To heapify a subtree rooted with node which is an index in array[].
// size is size of heap 
const heapify = (array, size, node) => {
    let max = node
    let left = node * 2 + 1
    let right = node * 2 + 2

    // If left child is larger than root
    if (left < size && array[left] > array[max]) {
        max = left
    }

    // If right child is larger than max so far
    if (right < size && array[right] > array[max]) {
        max = right
    }

    // If max is not root
    if (max !== node) {
        [ array[node], array[max] ] = [ array[max], array[node] ]

        // Recursively heapify the affected sub-tree
        heapify(array, size, max)
    }
}

module.exports = {
    heapSort
}