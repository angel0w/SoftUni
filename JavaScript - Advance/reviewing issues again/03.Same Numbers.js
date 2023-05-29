function samenumbers(numbers) {
    let inputNum = numbers.toString();
    let isSame = true;
    let sum = 0;
    let digitToCompare = inputNum[0];

    for (let i = 0; i < inputNum.length; i++) {
        let currentDigit = inputNum[i];
        sum += Number(currentDigit);

        if (currentDigit !== digitToCompare) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}
// samenumbers(222222);
samenumbers(1234);
