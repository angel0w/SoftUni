function rotateArr(array, rotate) {
    let result = array.slice();

    for (let i = 0; i < rotate; i++) {
        const element = array[i];
        let last = result.pop();
        result.unshift(last);
    }

    console.log(result.join(' '));
}
rotateArr(
    ['1', '2', '3', '4'],

    2
);
rotateArr(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
