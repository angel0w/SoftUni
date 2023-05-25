function cookingNumbers(num, com1, com2, com3, com4, com5) {
    let number = num;
    let commands = [com1, com2, com3, com4, com5];

    let chop = function () {
        return number / 2;
    };
    let dice = function () {
        return Math.sqrt(number);
    };
    let spice = function () {
        return number + 1;
    };
    let bake = function () {
        return number * 3;
    };
    let fillet = function () {
        return number * 0.8;
    };

    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i];

        switch (currentCommand) {
            case 'chop':
                number = chop(number);
                console.log(number);
                break;
            case 'dice':
                number = dice(number);
                console.log(number);
                break;
            case 'spice':
                number = spice(number);
                console.log(number);
                break;
            case 'bake':
                number = bake(number);
                console.log(number);
                break;
            case 'fillet':
                number = fillet(number);
                console.log(number);
                break;
            default:
                break;
        }
    }
}
// cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
