function circleArea (input) {
    let res;
    if (typeof input === 'number') {
        res = Math.pow(input,2) * Math.PI;
        console.log(res.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
}
circleArea(5);
circleArea('name');