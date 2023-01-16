/**
 *      Sorting Algorithms. Performance Testing
 */

const { generateArray } = require('../helpers/array_generator')
const { generateRandomizedArray } = require('../helpers/randomized_array_generator')
const { javascriptSort } = require('../algorithms/javascript_sort')
const { insertionSort } = require('../algorithms/insertion_sort')
const { selectionSort } = require('../algorithms/selection_sort')
const { bubbleSort, bubbleSortV2, bubbleSortV3 } = require('../algorithms/bubble_sort')
const { mergeSort } = require('../algorithms/merge_sort')
const { heapSort } = require('../algorithms/heap_sort')
const { quickSort, quickSortV2 } = require('../algorithms/quick_sort')

const array = generateRandomizedArray(0, 9999, 9999)

const testSortingAlgorithmsPerformance = (description, fn, ...args) => {
    const clone = Array.from(args)
    const start = performance.now()
    fn(clone)
    const duration = performance.now() - start
    console.log(description, duration.toFixed(2), 'ms')
}

testSortingAlgorithmsPerformance('javascriptSort   ', javascriptSort, ...array)
testSortingAlgorithmsPerformance('insertionSort    ', insertionSort, ...array)
testSortingAlgorithmsPerformance('selectionSort    ', selectionSort, ...array)
testSortingAlgorithmsPerformance('bubbleSort       ', bubbleSort, ...array)
testSortingAlgorithmsPerformance('bubbleSortV2     ', bubbleSortV2, ...array)
testSortingAlgorithmsPerformance('bubbleSortV3     ', bubbleSortV3, ...array)
testSortingAlgorithmsPerformance('* mergeSort      ', mergeSort, ...array)
testSortingAlgorithmsPerformance('heapSort         ', heapSort, ...array)
testSortingAlgorithmsPerformance('quickSort        ', quickSort, ...array)
testSortingAlgorithmsPerformance('quickSortV2      ', quickSortV2, ...array)
