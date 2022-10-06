function calculator(array, order) {
    if (order === 'asc') {
        array.sort((a,b) => a - b);
    } else {
        array.sort((a,b) => b - a);
    }

    return array;
}