/**
 *      Merge Sort
 */

const chai = require('chai')
const assert = chai.assert
const { generateArray } = require('../../helpers/array_generator')
const { mergeSort } = require('../../algorithms/merge_sort')

describe('Merge sort', () => {
    let array
    it('mergeSort (descending = false)', () => {
        array = generateArray(0, 9, true)
        assert.deepEqual(mergeSort(array), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        array = generateArray(-5, 5, true)
        assert.deepEqual(mergeSort(array), [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
        array = generateArray(10, 20, true)
        assert.deepEqual(mergeSort(array), [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
    })
    it('mergeSort (descending = true)', () => {
        array = generateArray(0, 9, true)
        assert.deepEqual(mergeSort(array, true), [9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
        array = generateArray(-5, 5, true)
        assert.deepEqual(mergeSort(array, true), [5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5])
        array = generateArray(10, 20, true)
        assert.deepEqual(mergeSort(array, true), [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10])
    })
})
