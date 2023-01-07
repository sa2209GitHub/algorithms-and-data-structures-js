/**
 *      Array Generator
 */

const { arrayShuffle } = require('./array_shuffle')

const generateArray = (min = 0, max = 99, shuffle = false) => {
    const array = []

    for (let i = min; i <= max; i++) {
        array.push(i)
    }

    return shuffle ? arrayShuffle(array) : array
}



module.exports = {
    generateArray
}