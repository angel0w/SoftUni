function rounding (rounded, precision) {
    for (let i = 0; i <= rounded; i++) {
        if ( rounded.length > 15) {
            console.log(rounded.toFixed(15))
        }
        console.log(rounded.toFixed(precision))
    }
}
rounding(3.1415926535897932384626433832795,2)
// rounding(10.5,3)