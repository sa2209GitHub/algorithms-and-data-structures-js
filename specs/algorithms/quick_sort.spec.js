/**
 *      Quick Sort
 */

const chai = require('chai')
const assert = chai.assert
const { generateArray } = require('../../helpers/array_generator')
const { quickSort, quickSortV2, quickSortV3 } = require('../../algorithms/quick_sort')

describe('Quick sort', () => {
    let array
    it('Should return sorted numeric array (quickSort)', () => {
        array = generateArray(0, 9, true)
        assert.deepEqual(quickSort(array), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        array = generateArray(-5, 5, true)
        assert.deepEqual(quickSort(array), [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
        array = generateArray(10, 20, true)
        assert.deepEqual(quickSort(array), [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
    })
    it('Should return sorted numeric array (quickSortV2)', () => {
        array = generateArray(0, 9, true)
        assert.deepEqual(quickSortV2(array), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        array = generateArray(-5, 5, true)
        assert.deepEqual(quickSortV2(array), [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
        array = generateArray(10, 20, true)
        assert.deepEqual(quickSortV2(array), [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
    })
    it('Should return sorted numeric array (quickSortV3)', () => {
        array = generateArray(0, 9, true)
        assert.deepEqual(quickSortV3(array), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        array = generateArray(-5, 5, true)
        assert.deepEqual(quickSortV3(array), [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
        array = generateArray(10, 20, true)
        assert.deepEqual(quickSortV3(array), [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
    })
})
