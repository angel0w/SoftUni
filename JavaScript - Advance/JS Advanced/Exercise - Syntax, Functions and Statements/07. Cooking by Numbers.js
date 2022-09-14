function cookingByNumbers(number, ...commands) {
    let num = +number;
    // let commandArr = [com1, com2, com3, com4, com5];

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] == 'chop') {
            num = chop(num);
            console.log(num);
        } else if (commands[i] == 'dice') {
            num = dice(num);
            console.log(num);
        } else if (commands[i] == 'spice') {
            num = spice(num);
            console.log(num);
        } else if (commands[i] == 'bake') {
            num = bake(num);
            console.log(num);
        } else if (commands[i] == 'fillet') {
            num = fillet(num);
            console.log(num);
        }
    }

    function chop(num) {
        return (num /= 2);
    }

    function dice(num) {
        return Math.sqrt(num);
    }

    function spice(num) {
        return (num += 1);
    }

    function bake(num) {
        return (num *= 3);
    }

    function fillet(num) {
        return (num *= 0.8).toFixed(1);
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('----------------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
