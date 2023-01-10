/**
 *      Median
 */

const getMedian = (array, round = false) => {
    if (!arr.length) return 0
    
    const sorted = Array.from(array).sort((a, b) => a - b)
    const middle = Math.floor(sorted.length / 2)

    return sorted.length % 2 === 0 ?
                             round ? Math.round((sorted[middle - 1] + sorted[middle]) / 2)
                                   : (sorted[middle - 1] + sorted[middle]) / 2
                                   : sorted[middle] 
}

module.exports = {
    getMedian
}