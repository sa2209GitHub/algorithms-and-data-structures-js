/**
 *      Bumeric Array Generator
 */

const chai = require('chai')
const assert = chai.assert
const { generateNumericArray } = require('../../helpers/numeric_array_generator')

describe('Numeric array generator', () => {
    it('Should return an array of the correct length', () => {
        assert.equal(generateNumericArray(9).length, 10)
    })
})