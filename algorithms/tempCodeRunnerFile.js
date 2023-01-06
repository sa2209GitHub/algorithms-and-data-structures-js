    while (firstArray.length && secondArray.length) {
        firstArray[0] < secondArray[0] ? mergedArray.push(firstArray.shift()) : mergedArray.push(secondArray.shift())
        console.log(firstArray, secondArray, mergedArray)
    }