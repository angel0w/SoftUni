// let com1 = 2;
// let com2 = 'o';
// let com3 = 3;

// let text = 'llHe';

// text = text.substring(0, com1) + com2 + text.substring(2); // ll

// // console.log(text); // lloHe

// let sliced = text.slice(0,com3);
// console.log(sliced);
// text = text.substring(com3) + sliced; // He // He + llo
// console.log(asd); // Hello

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// let abv = 'abcde';
// let try1 = abv.substr(0,2);
// let try2 = abv.substring(0,2);
// console.log(try1 + '*');
// console.log(try2);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

let text = 'A small sentence with some words';
let word = 'small';
console.log(text);
let newText = text.split(word);
console.log(newText);
newText = newText.join("*".repeat(word.length));
console.log(newText); 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
