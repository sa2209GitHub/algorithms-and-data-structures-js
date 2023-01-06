/**
 *      Binary Search
 *      Iterative and Recursive Solutions
 */

const binarySearchIterative = (array, value) => {
    let low = 0
    let high = array.length - 1
    
    while (low <= high) {
        let mid = Math.round((low + high) / 2)
        
        switch (true) {
            case value > array[mid]: low = mid + 1;     break
            case value < array[mid]: high = mid - 1;    break
            default: return mid
        }
    }
    
    return `${value}: not found`
}

const binarySearchRecursive = (array, value, low = 0, high = array.length) => {
    const mid = Math.round((low + high) / 2)

    switch (true) {
        case low > high:            return `${value}: not found`
        case value > array[mid]:    return binarySearchRecursive(array, value, mid + 1, high)
        case value < array[mid]:    return binarySearchRecursive(array, value, low, mid - 1)
        default:                    return mid
    }
}

module.exports = {
    binarySearchIterative,
    binarySearchRecursive
}