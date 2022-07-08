function meetings (input) {

    let obj = {};

    for (let line of input ) {
        let [day, name] = line.split(" ");

        if (obj.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            obj[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let [key, value] of Object.entries(obj)) {
        console.log(`${key} -> ${value}`);
    }

    // or 
    // for (let key in obj) {
    //     console.log(`${key} -> ${obj[key]}`);
    // }

}
meetings([
'Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim']);
console.log(`-------`);
meetings([
'Friday Bob',

'Saturday Ted',

'Monday Bill',

'Monday John',

'Wednesday George']);