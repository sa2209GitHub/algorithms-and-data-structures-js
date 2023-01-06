/**
 *      Numeric Array generator
 */

const  generateNumericArray = (max = 99, shuffle = false) => {
    const array = []

    for (let i = 0; i <= max; i++) {
        array[i] = i
    }
    
    return shuffle ? array.sort(() => Math.random() > 0.5 ? 1 : -1) : array
}

module.exports = {
    generateNumericArray
}