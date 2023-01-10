/**
 *      Randomized Array Generator
 */

const generateRandomizedArray = (min = 9, max = 99, length = 100, float = false) => {
    if (max < min) [min, max] = [max, min]

    return [...new Array(length)].map(() => {
        return float ? (Math.random() * (max - min) + min).toFixed(4)
                     : Math.round(Math.random() * (max - min) + min)
    })
}

module.exports = {
    generateRandomizedArray
}