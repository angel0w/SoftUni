// function solve (startNum, endNum) {
//     let space = '';
//     for (let i = startNum; startNum <= endNum; startNum++){
//         space += `${startNum} `;
//     console.log(space);
//     }
// }
// solve(5,10);



/////////////////////////////////////////

// function printAndSum(startNum, endNum) {
//     let sum = 0;
//     let space = "";
//     for (let i = startNum; startNum <= endNum; startNum++) {
//       sum += startNum;
//       space += `${startNum} `;
//     }
//     console.log(sum);
//     console.log(space);
//     console.log(`Sum: ${sum}`);
//   }
//   printAndSum(5, 10);

/////////////////////////////////////////

function numNto1 (number) {
    let num = 1
    while (num <= number ) {
        console.log(num);
        num = 2 * num  + 1;

    }
}
numNto1(10)