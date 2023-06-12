function positiveNegativeNums(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (element < 0) {
            newArray.unshift(element);
        } else {
            newArray.push(element);
        }

        
    }

    for (const el of newArray) {
        console.log(el);
    }
}
positiveNegativeNums([7, -2, 8, 9])
positiveNegativeNums([3, -2, 0, -1])
