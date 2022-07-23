//////////////////////    01    //////////////////////
// function furniture(input) {

//     let text = input.join(" ");
//     let furnitureArr = [];
//     let totalSum = 0;
//     let pattern = />>(?<furniture>[A-Z][A-z]+)<<(?<price>[\d.]+)!(?<quantity>\d+)/gm;
//     let valid;

//     while ((valid = pattern.exec(text))!== null) {

//         let validName = valid.groups['furniture'];
//         let validPrice = Number(valid.groups['price']);
//         let validQantity = Number(valid.groups['quantity']);
        
//         furnitureArr.push(validName);
//         totalSum += (validPrice * validQantity);
//     }

//     console.log('Bought furniture:');
//     furnitureArr.forEach(el => console.log(el));
//     console.log(`Total spend money: ${totalSum.toFixed(2)}`);

// }
// furniture(['>>Sofa<<312.23!3',

// '>>TV<<300!5',

// '>Invalid<<!5',

// 'Purchase']);
// console.log('-------');
// furniture(['>>Laptop<<312.2323!3',

// '>>TV<<300.21314!5',

// '>Invalid<<!5',

// '>>TV<<300.21314!20',

// '>>Invalid<!5',

// '>>TV<<30.21314!5',

// '>>Invalid<<!!5',

// 'Purchase']);

//////////////////////    02    //////////////////////

// function race (input) {
    
//     let nameMap = new Map();
//     let names = input.shift().split(", ");
    
//     names.forEach(person => {
//         nameMap.set(person,0);
//     });

//     let letterPattern = /[A-Za-z]+/gm;
//     let digitsPattern = /\d/gm;

//     for(let i = 0; i < input.length; i++) {

//         let currentLine = input[i];
//         if (currentLine === 'end of race'){
//             break;
//         }

//         let name = currentLine.match(letterPattern).join('');
//         let distance = (currentLine.match(digitsPattern)).reduce((a, b) =>{
//             return Number(a) + Number(b);
//         },0);;
        
//         if(nameMap.has(name)){

//             let prevDistance = nameMap.get(name);
//             prevDistance += distance;
//             nameMap.set(name, prevDistance);

//         }
//     }

//     let sortedNames = Array.from(nameMap).sort((a, b) => {
//         return b[1] - a[1]
//     });

//     console.log(`1st place: ${sortedNames[0][0]}`);
//     console.log(`2nd place: ${sortedNames[1][0]}`);
//     console.log(`3rd place: ${sortedNames[2][0]}`);
// }
// race(['George, Peter, Bill, Tom',
// 'G4e@55or%6g6!68e!!@ ',
// 'R1@!3a$y4456@',
// 'B5@i@#123ll',
// 'G@e54o$r6ge#',
// '7P%et^#e5346r',
// 'T$o553m&6',
// 'end of race']);

//////////////////////    03    //////////////////////

function softUniBarIncome (input) {
    
    let totalSum = 0;
    let reggex = /%(?<name>[A-Z][a-z]+)%[^$%|.]*\<(?<product>\w+)\>[^$%|.0-9]*\|(?<count>\d+)\|[^$%|.0-9]*((?<price>\d+\.\d+)?)\$/gm

    let text = input.join('-');
    let current = reggex.exec(text);
    while (current) {
        let currentPrice = current.groups.count * current.groups.price;
        console.log(`${current.groups.name}: ${current.groups.product} - ${currentPrice.toFixed(2)} `);
        totalSum += currentPrice;
        current = reggex.exec(text);
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',

'%Peter%<Gum>|1|1.3$',

'%Maria%<Cola>|1|2.4$',

'end of shift']);
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',

'%Peter%<Gum>1.3$',

'%Maria%<Cola>|1|2.4',

'%Valid%<Valid>valid|10|valid20$',

'end of shift']);

//////////////////////    04    //////////////////////

//////////////////////    05    //////////////////////

//////////////////////    06    //////////////////////

//////////////////////    07    //////////////////////

//////////////////////    08    //////////////////////

//////////////////////    09    //////////////////////