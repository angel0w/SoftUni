function sumFirstLast (array) {
    // Write a function that calculates and returns the sum of the first and the last elements in an array
    let first = array.shift();
    let last = array.pop();

    console.log(Number(first) + Number(last));

}
sumFirstLast(['20', '30', '40'])
sumFirstLast(['5', '10'])