function phoneBook (input) {

    let obj = {};
    
    for (let  line of input) {
        let [name, number] = line.split(" ");
        obj[name] = number;
    }

    for (let line in obj) {
        console.log(`${line} -> ${obj[line]}`);
    }
}
phoneBook([
'Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344']);
console.log('---------');
phoneBook([
'George 0552554',

'Peter 087587',

'George 0453112',

'Bill 0845344']);