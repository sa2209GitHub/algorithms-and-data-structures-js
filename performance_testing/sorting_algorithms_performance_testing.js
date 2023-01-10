/**
 *      Performance Testing
 */

const { generateArray } = require('../helpers/array_generator')

const { javascriptSort } = require('../algorithms/javascript_sort')
const { insertionSort } = require('../algorithms/insertion_sort')
const { selectionSort } = require('../algorithms/selection_sort')
const { bubbleSort } = require('../algorithms/bubble_sort')
const { mergeSort } = require('../algorithms/merge_sort')
const { heapSort } = require('../algorithms/heap_sort')
const { quickSort, quickSortV2, quickSortV3 } = require('../algorithms/quick_sort')

const array = generateArray(0, 9999, true)

const testSortingAlgorithmsPerformance = (description, fn, ...args) => {
    const clone = Array.from(args)
    const start = performance.now()
    fn(clone)
    const duration = performance.now() - start
    console.log(description, duration.toFixed(2), 'ms')
}

testSortingAlgorithmsPerformance('JavaScript sort:', javascriptSort, ...array)
testSortingAlgorithmsPerformance('Insertion sort:', insertionSort, ...array)
testSortingAlgorithmsPerformance('Selection sort:', selectionSort, ...array)
testSortingAlgorithmsPerformance('Bubble sort:', bubbleSort, ...array)
testSortingAlgorithmsPerformance('Merge sort:', mergeSort, ...array)
testSortingAlgorithmsPerformance('Heap sort:', heapSort, ...array)
testSortingAlgorithmsPerformance('Quick sort (v1):', quickSort, ...array)
testSortingAlgorithmsPerformance('Quick sort (v2):', quickSortV2, ...array)
testSortingAlgorithmsPerformance('Quick sort (v3):', quickSortV3, ...array)
