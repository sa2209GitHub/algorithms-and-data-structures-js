/**
 *      JavaScript Sort
 */

const { generateArray } = require('../helpers/array_generator')
const { generateRandomizedArray } = require('../helpers/randomized_array_generator')

const javascriptSort = (array, descending = false) => {
    return array.sort((a, b) => descending ? b - a : a - b)
}

module.exports = {
    javascriptSort
}