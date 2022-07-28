function furniture (input) {

    let totalSum = 0;
    console.log('Bought furniture:');
    for (let el of input) {

        if ( el === 'Purchase') {
            break;
        }

        // let regex = />>(?<furniture>[A-Za-z]+)<<(?<price>\d+(.\d+)?)!(?<countity>\d+)/gm;
        let regex = />>(?<furniture>[A-Za-z]+)<<(?<price>\d+([.]?\d+)?)!(?<countity>\d+)/gm
        let match = regex.exec(el);
        if (match) {
            totalSum += +match.groups.price * +match.groups.countity;
            console.log(`${match.groups.furniture}`);

        }
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
furniture([
'>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']);
console.log('~~~~~~~~~');
furniture([
'>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']);

//     let text = input.join(" ");
//     let furnitureArr = [];
//     let totalSum = 0;
    
//     let pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/gm;
//     let valid;

//     while ((valid = pattern.exec(text)) !== null) {
//         let validName = valid.groups['furniture'];
//         let validPrice = +valid.groups['price'];
//         let validQuantity = +valid.groups['quantity'];

//         furnitureArr.push(validName);
//         totalSum += validPrice * validQuantity;
//     }
//     console.log(`Bought furniture:`);
//     furnitureArr.forEach( el => console.log(el));
//     console.log(`Total money spend: ${totalSum.toFixed(2)}`);