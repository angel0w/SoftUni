function employees (input) {
    let object = {};
    for (let el of input) {
        object.name = el;
        object.number = el.length;
        console.log(`Name: ${object.name} -- Personal Number: ${object.number}`);
    }
}
employees([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]);
// employees('-------');
// employees([
// 'Samuel Jackson',
// 'Will Smith',
// 'Bruce Willis',
// 'Tom Holland'
// ]);
