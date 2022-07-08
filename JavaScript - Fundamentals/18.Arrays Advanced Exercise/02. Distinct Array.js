function disctinctArr (arr) {
    
    let resultArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (!resultArray.includes(arr[i])) {
            resultArray.push(arr[i]);
        }
    }
console.log(resultArray.join(' '));
}
disctinctArr([1, 2, 3, 4]);
disctinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);
disctinctArr([20, 8, 12, 13, 4, 4, 8, 5]);