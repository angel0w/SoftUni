function sumFirstLast(arr) {
    let firstN = +arr.shift();
    let lastN = +arr.pop();
    let sum = firstN + lastN;

    return sum;
}
sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);
