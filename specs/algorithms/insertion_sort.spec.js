/**
 *      Insertion Sort
 */

const chai = require('chai')
const assert = chai.assert
const { generateNumericArray } = require('../../helpers/numeric_array_generator')
const { insertionSort } = require('../../algorithms/insertion_sort')

describe('Insertion sort', () => {
    const array = generateNumericArray(9, true)
    it('Should return sorted numeric array', () => {
        assert.deepEqual(insertionSort(array), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    })
})
