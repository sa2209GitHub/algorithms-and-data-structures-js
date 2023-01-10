/**
 *      JavaScript Sort
 */

const { generateArray } = require('../helpers/array_generator')
const { generateRandomizedArray } = require('../helpers/randomized_array_generator')

const javascriptSort = array => {
    return array.sort((a, b) => a - b)
}

module.exports = {
    javascriptSort
}
