/**
 *      Array Generator
 */

const chai = require('chai')
const assert = chai.assert
const { generateArray } = require('../../helpers/array_generator')

describe('Array generator', () => {
    it('Should return an array of the correct length', () => {
        assert.equal(generateArray(0, 9).length, 10)
    })
})