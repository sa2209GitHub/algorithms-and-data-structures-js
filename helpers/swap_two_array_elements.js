/**
 *      Swap Two Array Elements
 */

const swap = (array, a, b) => {
    [ array[a], array[b] ] = [ array[b], array[a] ]
}

module.exports = {
    swap
}