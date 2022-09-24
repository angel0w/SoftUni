function smallestTwoNums (arr) {
    let sorted = arr.sort((a,b) => a - b);
    for (let i = 0; i < 2; i++) {
        console.log(sorted[i]);
    }
}
smallestTwoNums([30, 15, 50, 5]);
smallestTwoNums([3, 0, 10, 4, 7, 3]);