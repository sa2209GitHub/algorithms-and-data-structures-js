/**
 *      Merge Sort
 */

const { generateNumericArray } = require('../helpers/numeric_array_generator')

const mergeSort = array => {
    if (array.length === 1) return array

    let firstArray = array.slice(0, Math.round(array.length / 2))
    let secondArray = array.slice(Math.round(array.length / 2))

    firstArray = mergeSort(firstArray)
    secondArray = mergeSort(secondArray)

    return merge (firstArray, secondArray)
}

const merge = (firstArray, secondArray) => {
    const mergedArray = []
    
    while (firstArray.length && secondArray.length) {
        firstArray[0] < secondArray[0] ? mergedArray.push(firstArray.shift())
                                       : mergedArray.push(secondArray.shift())
    }

    while (firstArray.length) {
        mergedArray.push(firstArray.shift())
    }

    while (secondArray.length) {
        mergedArray.push(secondArray.shift())
    }

    return mergedArray
}

module.exports = {
    mergeSort
}

module.exports = {
    mergeSort
}