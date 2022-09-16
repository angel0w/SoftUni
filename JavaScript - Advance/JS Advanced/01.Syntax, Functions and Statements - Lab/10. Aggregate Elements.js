function aggregateElements(input) {
    let sum = 0;
    let inverseValues = 0;
    let concat = "";

    for (let i = 0; i < input.length; i++) {
        let num = input[i];
        sum += num;
        inverseValues += 1 / num;
        concat += num;
    }
    console.log(sum);
    console.log(inverseValues);
    console.log(concat);
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
