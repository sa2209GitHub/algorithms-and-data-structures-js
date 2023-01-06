/**
 *      Bubble Sort
 */

const { generateNumericArray } = require('../helpers/numeric_array_generator')

const bubbleSort = array => {    
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                [ array[j], array[j + 1] ] = [ array[j + 1], array[j] ]
            }
        }
    }
   
    return array
}

module.exports = {
    bubbleSort
}