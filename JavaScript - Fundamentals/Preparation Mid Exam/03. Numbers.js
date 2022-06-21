function numbers (input) {
    let numbers=input.split(" ").map(x=>Number(x));
    let sum = 0;

    for ( let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    let average = sum / numbers.length;    

    let biggerNums = numbers.filter(x => x > average);
    biggerNums = biggerNums.sort((a, b) => b - a);

    biggerNums = biggerNums.slice(0, 5);
    if (biggerNums.length == 0){
        console.log("No");
    } else {
        console.log(biggerNums.join(" "));  
    }
    }
numbers("10 20 30 40 50");
