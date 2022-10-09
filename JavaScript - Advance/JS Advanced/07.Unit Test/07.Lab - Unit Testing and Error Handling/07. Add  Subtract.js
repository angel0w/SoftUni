function createCalculator() {

    let value = 0;
    
    return {
    
    add: function(num) { value += Number(num); },
    
    subtract: function(num) { value -= Number(num); },
    
    get: function() { return value; }
    
    }
}
let sum = createCalculator();



module.exports = {createCalculator};