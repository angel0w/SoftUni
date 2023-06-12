function biggerHalf(array) {
    let ascendingOrder = array.sort((a,b) => a - b).reverse();

    let length = Math.ceil(ascendingOrder.length / 2);
    let newArr = [];
    for (let i = 0 ; i < length; i++) {
        newArr.push(ascendingOrder[i])
    }

    return newArr.reverse();

}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
