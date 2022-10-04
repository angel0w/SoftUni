function area(params) {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs.apply(this.x * this.y * this.z);
}

function solve(area,vol,input) {
    let cordinates = JSON.parse(input);
    let result = [];

    for(let points of cordinates) {
        // console.log(points);
        result.push({
            area: area.call(points),
            volume:vol.call(points)
            
        })
    }
    console.log(result);
    return result
}
console.log(solve(area, vol, `[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]`));
