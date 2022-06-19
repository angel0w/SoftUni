function divideBy9(input) {
    const minimum = Number(input[0]);
    const maximum = Number(input[1]);

    let sum = 0;
    let outputNumber = '';
    for (let i = minimum; i < maximum; i++){
        if (i % 9 ===0){
            sum +=i;
            outputNumber += i + "\n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(outputNumber)
}
divideBy9(["100", "200"])