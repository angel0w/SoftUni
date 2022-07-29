function sumOddNums(num) {
    let sum = 0;
    let counter = 1;
    for (let i = 1; i <= num; i++) {
        console.log(counter);
        // sum = sum + i;
        sum += counter;
        counter +=2
    }
    console.log(`Sum: ${sum}`);

}
sumOddNums(5)