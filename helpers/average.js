/**
 *      Average
 */

const getAverage = (array, round = false) => {
    if (!array.length) return 0
    const sum = array.reduce((accumulator, current) => accumulator + current)
    const length = array.length
    return round ? Math.round(sum / length) : sum / length
}

module.exports = {
    getAverage
}