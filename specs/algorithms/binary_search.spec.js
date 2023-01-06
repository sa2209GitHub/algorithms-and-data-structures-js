/**
 *      Binary Search
 *      Iterative and Recursive solutions
 */

const chai = require('chai')
const assert = chai.assert
const { binarySearchIterative, binarySearchRecursive } = require('../../algorithms/1_binary_search')

describe ('Binary search', () => {
    const array = []
    for (let i = 98; i < 99999; i++) array.push(i)

    describe ('Iterative fubction', () => {
        it ('Should return correct Array index or \'not found\' message', () => {
            assert.equal(binarySearchIterative(array, 42), '42: not found')
            assert.equal(binarySearchIterative(array, 101), 3)
            assert.equal(binarySearchIterative(array, 5555), 5457)
        })
    })
    describe('Recursive function', () => {
        it ('Should return correct Array index or \'not found\' message', () => {
            assert.equal(binarySearchRecursive(array, 42), '42: not found')
            assert.equal(binarySearchRecursive(array, 101), 3)
            assert.equal(binarySearchRecursive(array, 5555), 5457)
        })
    })
})