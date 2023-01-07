/**
 *      Heap Sort
 */

const chai = require('chai')
const assert = chai.assert
const { generateArray } = require('../../helpers/array_generator')
const { heapSort } = require('../../algorithms/heap_sort')

describe('Heap sort', () => {
    let array
    it('Should return sorted numeric array', () => {
        array = generateArray(0, 9, true)
        assert.deepEqual(heapSort(array), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        array = generateArray(-5, 5, true)
        assert.deepEqual(heapSort(array), [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
        array = generateArray(10, 20, true)
        assert.deepEqual(heapSort(array), [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
    })
})
