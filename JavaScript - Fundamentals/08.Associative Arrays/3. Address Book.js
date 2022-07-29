function addressBook (input) {
    
    let obj = {};

    for (let line of input) {
        let [name, address] = line.split(":");
        obj[name] = address;
    }

    let unsortedKey = Object.keys(obj);
    let sorted = unsortedKey.sort((a,b) => a.localeCompare(b));
    for (let key of sorted) {
        console.log(key, '->' ,obj[key]);
    }
    // or
    // let entries = Object.entries(obj);
    // let sortedEntruis = entries.sort(([keyA,valueA],[keyB,valueB]) => keyA.localeCompare(keyB));
    // for(let [name,address] of sortedEntruis) {
    //     console.log(name, '->', address);
    // }
}
addressBook([
'Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd']);

console.log(`-------`);

addressBook([
'Bob:Huxley Rd',

'John:Milwaukee Crossing',

'Peter:Fordem Ave',

'Bob:Redwing Ave',

'George:Mesta Crossing',

'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd']);