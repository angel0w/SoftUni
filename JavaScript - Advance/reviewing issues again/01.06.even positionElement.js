function evenPosition (array) {
    // Write a function that finds the elements at even positions in an array.
    // let buff = '';
    // for (let i = 0; i < arr.length; i++) {
    //     let currentPos = arr[i];
    //     if ( i % 2 == 0) {
    //         buff += currentPos + ' ';

    //     }
    // }
    // console.log(buff);

    let arrayResult = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (i % 2 == 0 ) {
            arrayResult.push(element);
        }
    }
    
    console.log(arrayResult);
}
evenPosition(['20', '30', '40', '50', '60']);
evenPosition(['5', '10'])