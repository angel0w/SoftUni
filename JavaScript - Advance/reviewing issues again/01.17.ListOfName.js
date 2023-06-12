function listOfNames(array) {
    let sorted = array.sort((a,b) => a.localeCompare(b));
    let i = 1
    
    for (const el of sorted) {
        console.log(`${i}.${el}`);
        i++;
    }
}
listOfNames(['John', 'Bob', 'Christina', 'Ema']);
