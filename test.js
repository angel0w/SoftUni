// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']

// ];
// const types = []
// // console.log(jonas[0]);
// // console.log(jonas[1]);
// // ...
// // console.log(jonas[4]);

// for ( let i = 0; i < jonas.length ; i++) {

//     // readuomg from jonas array
//     console.log(jonas[i], typeof jonas[i]);
//     // Fillig types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }

// console.log(types);

// const year = [1991, 2007, 1969, 2020];
// const ages = [];

// for ( let i = 0;i < year.length; i++){
//    ages.push( 2037- year[i]);
// }
// console.log(ages);

// console.log('--- ONLY STRINGS ---');
// for ( let i = 0;i < year.length; i++){
//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- BREAK WITH NUMBER ---');
// for ( let i = 0;i < year.length; i++){
//     if (typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// }

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// 0, 1, ..., 4
// 4, 3, ..., 0

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`------------ Starting exercise ${exercise}`);

//   for (rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
let dice = 5

 while(dice !==6) {
     console.log(`You rolled a ${dice}`);

    //  dice = Math.trunc(Math.random() * 6) + 1;
     if (dice === 6) console.log('Loop is about to end..');
     dice++;
 }