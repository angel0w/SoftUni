function pascalCaseSplitter (input) {
    let arr = [];
    let currWord = input[0];

    for (let i = 1; i < input.length; i++) {
        let currCh = input[i];

        if (currCh.toUpperCase() !== currCh) {
            currWord = currWord.concat(currCh);
        } else {
            arr.push(currWord);
            currWord = currCh
        }
    }
    arr.push(currWord);
    console.log(arr.join(", "));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log('~~~~~~~~');
pascalCaseSplitter('HoldTheDoor');
console.log('~~~~~~~~');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');

// let wordRe = /($[a-z])|[A-Z][^A-Z]+/gm;
// return word.match(wordRe).join(", ");