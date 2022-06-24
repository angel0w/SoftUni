function arrayModifier(array) {

  let arrayToModifier = array.shift().split(" ").map(Number);

  while (array[0] != "end") {
    let step = array.shift().split(" ");
    let command = step[0];
    index1 = Number(step[1]);
    index2 = Number(step[2]);

    switch (command) {
      case "swap":
        let num = arrayToModifier[index1];
        arrayToModifier[index1] = arrayToModifier[index2];
        arrayToModifier[index2] = num;
        break;

      case "multiply":
        arrayToModifier[index1] *= arrayToModifier[index2];
        break;

      case "decrease":
        for ( let i = 0; i < arrayToModifier.length; i++) {
          arrayToModifier[i]--;
        }  

        break;
    }
  }
  console.log(arrayToModifier.join(", "));
}

arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
// arrayModifier([
//     '1 2 3 4',
//     'swap 0 1',
//     'swap 1 2',
//     'swap 2 3',
//     'multiply 1 2',
//     'decrease',
//     'end'
// ]
// );
