// function login(input) {
//   let index = 0;
//   let username = input[index];
//   index++;
//   let password = username.split('').reverse().join('');
//   let counter = 0;



//   let currentInput = input[index];

//   while (currentInput !== password) {
//     counter++;
//     if (counter === 4) {
//       console.log(`User ${username} blocked!`);
//       return;
//     } else {
//       console.log("Incorrect password. Try again.");
//     }

//     index++;
//     currentInput = input[index];
//   }
//   if (input[index] === password) {
//     console.log(`User ${username} logged in`);
//   }
// }
// login(["Acer", "login", "go", "let me in", "recA"]);
