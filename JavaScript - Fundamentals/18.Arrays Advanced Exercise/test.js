


// [[[[[[[[~~~SlICE()~~~]]]]]]]
// function arraysAdvanced() {
//   let arr = [1, 2, 3, 4];
//   let arr2 = arr.slice(0,2); // от нула до 2 индекс не включително
//   console.log(arr2);
//   console.log(arr);
// }
// arraysAdvanced();





// [[[[[[[[~~~SPlICE()~~~]]]]]]
// function arraysAdvanced() {

//         let arr = [1, 2, 3, 4];
//         let asd = arr.splice(1,1,123,123,123,123);
//         console.log(arr);
//         console.log(asd);
//       }
//       arraysAdvanced();




// [[[[[[[[~~~MAP>()~~~]]]]]]]
// function arraysAdvanced() {
//     let arr = [1, 2, 3, 4];
//     // let newArray = arr.map(el =>el * el ); {
//     let newArray = arr.map((el) => {
//         return el * el
//     } );
// console.log(`Arr: ${newArray}`);
// }
//  arraysAdvanced();




//  // [[[[[[[[~~~FILTER>()~~~]]]]]]]
//  function arraysAdvanced() {
  
//     let arr = [1, 2, 3, 4];
//     let newArray = arr.filter(el=>{
//         if(el % 2 === 0) {
//             return el;
//         }
//     })
//     console.log(`Arr: ${newArray}`);
// }
//  arraysAdvanced();



 // [[[[[[[[~~~SORT>()~~~]]]]]]]
 function arraysAdvanced() {

    //сортиране по азбучен ред
    let arr = ['bbbb', 'aa', 'ccc'];
    let sortedArray = arr.sort(function(a,b){
        return a.localeCompare(b) //от по-голямото към по-малкото;
    });

   //сортиране на стринг
    // let arr = ['bbbb', 'aaaaaa', 'ccc'];
    // let sortedArray = arr.sort(function(a,b){
    //     return a.length - b.length //от по-голямото към по-малкото;
    // });

//сортиране на числа
    // let arr = [5, 1, 11, 3,100];
    // let sortedArray = arr.sort(function(a,b){
    //     return a-b; // от по-малкото към по-голямото
    //     return b-a // от по-голямото към по-малкото;
    // });

    console.log(sortedArray);


}
 arraysAdvanced();