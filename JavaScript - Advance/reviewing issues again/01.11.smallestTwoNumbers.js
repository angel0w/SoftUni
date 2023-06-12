let array = [1,2,3,4,5,6,7,8,9,19];

array.splice(1,0,111);
console.log(array);

array.sort((a,b) => a-b);
console.log(array);

let arrayString =  ['a','z','b','h','s','f'];
console.log(arrayString.sort((a,b) => b.localeCompare(a))); 