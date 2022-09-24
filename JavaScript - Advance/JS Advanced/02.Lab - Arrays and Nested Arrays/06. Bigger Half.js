function biggerHalf(input) {
    let sortedArr = input.sort((a, b) => a - b).reverse();
    let hard = Math.ceil(sortedArr.length / 2);
    let newArr = [];

    for (let i = 0; i < hard; i++) {
        newArr.push(sortedArr[i]);
    }
    return newArr.reverse();
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
