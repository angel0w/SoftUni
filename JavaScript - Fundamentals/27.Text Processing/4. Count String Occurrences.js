function countStringOccurrences (text, word) {
    let counter = 0;
    let words = text.split(' ');
    for (let el of words) {

        if (el === word) {
            counter++;
        }
    }
    console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence','is');
console.log('---------');
countStringOccurrences('softuni is great place for learning new programming languages','softuni');


