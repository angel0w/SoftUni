function softuniBarIncome (input) { 
    let pattern = /%(?<customer>[A-Z][a-z]*)%.*?<(?<product>\w+)>.*?\|(?<count>\d+)\|.*?(?<price>-?\d+(?:\.\d+)?)\$/gm
    let sum = 0;

    for (let element of input) {
        if(element === 'end of shift') {
            break;
        }

        let match = pattern.exec(element);

        if (match !== null) {
            match.groups.price = Number(match.groups.price);
            match.groups.count = Number(match.groups.count);
            console.log(`${match.groups.customer}: ${match.groups.product} - ${(match.groups.price * match.groups.count).toFixed(2)}`);
            sum += match.groups.count * match.groups.price;
        }
    }
    console.log(`Total income: ${sum.toFixed(2)}`);
}
softuniBarIncome([
'%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']);
console.log('~~~~~~~~~~~~~');
softuniBarIncome([
'%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']);


