/**
 *      Numeric Array generator
 */

const { arrayShuffle } = require('./array_shuffle')

const generateNumericArray = (max = 99, shuffle = false) => {
    const array = []

    for (let i = 0; i <= max; i++) {
        array[i] = i
    }
    
    return shuffle ? arrayShuffle(array)  : array
}

module.exports = {
    generateNumericArray
}