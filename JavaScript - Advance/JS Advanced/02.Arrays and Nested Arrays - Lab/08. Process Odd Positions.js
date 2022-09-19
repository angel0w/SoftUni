function processOddPositions(arr) {
    let arr2 = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
        } else {
            arr2.push(arr[i]);
        }
    }

    arr2 = arr2.map((x) => x * 2).reverse();
    return arr2;
}
processOddPositions([10, 15, 20, 25]);
console.log('-------');
processOddPositions([3, 0, 10, 4, 7, 3]);
