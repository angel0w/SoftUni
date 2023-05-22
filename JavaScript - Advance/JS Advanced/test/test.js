// // let a = 1;
// // let b = 4
// // let c = a + b;
// // console.log(c);

// // let cat = {
// //     name: 'Sharo',
// //     age: 7

// // };

// // console.log(cat.name);

// // cat.color = 'sharen';
// // console.log(cat.color);

// // cat.weight = 10;
// // console.log(cat.weight);

// //

// // function sum(x,y) {
// //     return x + y;
// // }

// // let sumFunc = sum(1,2)
// // console.log(sumFunc);

// //

// // let sumFunc = (x,y) => {
// //     return x + y;
// // }
// // let result = sumFunc(1,2);
// // console.log(result);

// //

// // Funchtion declarion директно декларирана
// function name(params) {
//     console.log('Hello');
// }

// // Function expression функцията която закачаме към променлива
// const walk = function() {
//     console.log('Hello');
// }

// // function Arrow съкратен запис

// const walks = () => {
//     console.log('Hello');
// }

// //

// ~~~~~~~~~~~~~~~~~~~~ 1 ~~~~~~~~~~~~~~~~~~~

// function processText(param) {
//     let paramLength = param.length;
//     console.log(`${paramLength}\n${param}`);
// }
// processText('Hello, JavaScript!');

// ~~~~~~~~~~~~~~~~~~~~ 2 ~~~~~~~~~~~~~~~~~~~

// function stringLength(par1, par2, par3) {
//     let sum = par1.length + par2.length + par3.length;

//     let sumAvg = Math.floor(sum / 3)

//     console.log(sum);
//     console.log(sumAvg);    
// }
// stringLength('chocolate', 'ice cream', 'cake')

// ~~~~~~~~~~~~~~~~~~~~ 3 ~~~~~~~~~~~~~~~~~~~

// function largest (x,y,z) {
//     let largestNum;

//     if(x > y && x > z) {
//         largestNum = x;
//     } else if ( y > x && y > z) {
//         largestNum = y;
//     } else {
//         largestNum = z;
//     }

//     console.log(`The largest number is ${largestNum}.`);
// }
// largest(1,2,3);

// ||
// function largest (...params) {


//     console.log(`The largest number is ${Math.max(...params)}.`);
// }
// largest(1,2,3);

// ~~~~~~~~~~~~~~~~~~~~ 4 ~~~~~~~~~~~~~~~~~~~

function name(params) {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
    let count = 0


    while(true) {
        count++;
        console.log(count);

        if (count >= 50) {
            break
        }
    }
}
name()