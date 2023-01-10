/**
 *      Generic Swap for Manipulating Array Data
 */

const swap = (array, left, right) => {
    const temp = array[left]
    array[left] = array[right]
    array[right] = temp
}

module.exports = {
    swap
}