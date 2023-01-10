/**
 *      Binary Search. Iterative and Recursive solutions
 */

const chai = require('chai')
const assert = chai.assert
const { generateArray } = require('../../helpers/array_generator')
const { binarySearchIterative, binarySearchRecursive } = require('../../algorithms/binary_search')

describe('Binary search', () => {
    const array = generateArray(98, 9999)
    describe('Iterative fubction', () => {
        it('Should return correct Array index or \'not found\' message', () => {
            assert.equal(binarySearchIterative(array, 42), '42: not found')
            assert.equal(binarySearchIterative(array, 97), '97: not found')
            assert.equal(binarySearchIterative(array, 98), 0)
            assert.equal(binarySearchIterative(array, 101), 3)
            assert.equal(binarySearchIterative(array, 5555), 5457)
        })
    })
    describe('Recursive function', () => {
        it('Should return correct Array index or \'not found\' message', () => {
            assert.equal(binarySearchRecursive(array, 42), '42: not found')
            assert.equal(binarySearchRecursive(array, 97), '97: not found')
            assert.equal(binarySearchRecursive(array, 98), 0)
            assert.equal(binarySearchRecursive(array, 101), 3)
            assert.equal(binarySearchRecursive(array, 5555), 5457)
        })
    })
})