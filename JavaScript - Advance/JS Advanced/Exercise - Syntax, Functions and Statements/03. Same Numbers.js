function sameNumbers(number) {
    let numberAsString = number.toString();
    let firstNum = numberAsString[0];
    let flag = false;
    let sum = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        sum += +numberAsString[i];
        let currNum = numberAsString[i];

        if (currNum === firstNum) {
            flag = true;
        }
    }

    if (flag) {
        console.log(true);
    } else {
        console.log(false);
    }
    console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);
