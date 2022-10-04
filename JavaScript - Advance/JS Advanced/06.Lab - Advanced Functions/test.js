// function introduce(firstname,lastname) {
//     console.log(`Hello, ${firstname} ${lastname}, my name is ${this.name} ${person2.lastname} and I drive a ${this.car}`);
// }
// // introduce('Lex', 'Lane');

// let person = {
//     name: 'Denitsa',
//     car: 'Peogeot'
// };

// let person2 = {
//     name: 'Racho',
//     lastname: 'Hitrevski',
//     car: 'Pontiac'
// }

// introduce.call(person, 'Lex','Lane')
// console.log('~~~~~~~~');
// introduce.apply(person, ['Lex','Lane'])
// console.log('~~~~~~~~');
// let newFunc = introduce.bind(person, 'Mariyka','Petrova');
// newFunc();

// introduce.call(person2, 'Slavka', 'Ignatova')



////////////~~~~~~~~~~~~////////////~~~~~~~~~~~~////////////

function counterBuilder () {
    let counter = 0;
    return function () {
        counter++;
        console.log(counter);
    }
}
let counter = counterBuilder();
counter()
counter()
counter()
counter()



////////////~~~~~~~~~~~~////////////~~~~~~~~~~~~////////////
////////////~~~~~~~~~~~~////////////~~~~~~~~~~~~////////////
////////////~~~~~~~~~~~~////////////~~~~~~~~~~~~////////////
