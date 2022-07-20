// Please implement a funchtion that sorts an array of numbers where
// the biggest number has the greatest sim of all its digits.
//            [26,31,7,47,123,55] 
// тряа стане [31,123,7,26,55,47]

// sort 1d arrray by sum of digits

// function solve1 (arr) {

//     let newString = arr.map(String);
//     let sumString = (str) => str.split('').reduce((s,c) => s + Number(c), 0);
//     newString.sort((a,b) => {
//         return sumString(a) - sumString(b);
//     })

//     console.log(newString);

// }
// solve1([26, 31, 7, 47, 123, 55]);



function solve2 (arr) {
    
    let counter = 0;
    let start = arr.indexOf("L");
    let end = arr.indexOf("Q");

    for(let i = start + 1; i < end ;i++) {
        if(typeof arr[i] === 'string'){
            counter++;
        }
    }
    console.log(counter);

}
solve2([1, 'a', 'L', 4, "N", 's', 6, 'Q', 'P']);