function smallestTwoNums(array) {
    let newArr = array.sort((a,b) => a - b); 

    let result = []
    for (let i = 0; i <= 1; i++) {
        const element = newArr[i];
        result.push(element)

    }
    console.log(result.join(' '));
}
smallestTwoNums([30, 15, 50, 5]);
smallestTwoNums([3, 0, 10, 4, 7, 3]);

// numbers.sort((a, b) => a - b)