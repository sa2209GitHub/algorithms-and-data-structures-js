/**
 *      Randomized Array Generator
 */

const chai = require('chai')
const assert = chai.assert
const { generateRandomizedArray } = require('../../helpers/randomized_array_generator')

describe('Randomized array generator', () => {
    let array
    let min
    let max
    let length
    it('Should generate numbers within given limits', () => {
        min = 9; max = 99; length = 999
        array = generateRandomizedArray(min, max, length)
        assert.isBelow(Math.max(...array), max + 1)
        assert.isAbove(Math.min(...array), min - 1)
        assert.strictEqual(array.length, length)
        min = -9; max = 99; length = 999
        array = generateRandomizedArray(min, max, length)
        assert.isBelow(Math.max(...array), max + 1)
        assert.isAbove(Math.min(...array), min - 1)
        assert.strictEqual(array.length, length)
        min = -99; max = -9; length = 999
        array = generateRandomizedArray(min, max, length)
        assert.isBelow(Math.max(...array), max + 1)
        assert.isAbove(Math.min(...array), min - 1)
        assert.strictEqual(array.length, length)
    })
})