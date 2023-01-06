/**
 *      Randomized Numeric Array generator
 */

const chai = require('chai')
const assert = chai.assert
const { generateNumericArray } = require('../../helpers/numeric_array_generator')

describe('Randomized Numeric Array generator', () => {
    it('Should return an array of the correct length', () => {
        assert.equal(generateNumericArray(9).length, 10)
    })
})
