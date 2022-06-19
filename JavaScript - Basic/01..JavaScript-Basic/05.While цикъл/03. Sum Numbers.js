
function sumNumbers(input) {
    let index = 0;
    let nums = Number(input[index]);
    index++;

    let sum = 0;
    while (sum < nums){
        let tempNum = Number(input[index]);
        index++;
        sum +=tempNum;
    }
    console.log(sum)
}
/*function sumNumbers(input) {
    let index = 0;
    let num = Number(input[index]);
    index++;

    let sum = 0;
    while (sum < num){
        let tempNumber = Number(input[index]);
        index++;
        sum +=tempNumber;
    }
    console.log(sum)
}*/

sumNumbers(["100",
"10",
"20",
"30",
"40"])

sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
