function censoredWords (text, word) {

    // let nextNew = text.split(word);
    // let result = nextNew.join("*".repeat(word.length));
    // console.log(result);

    while(text.indexOf(word) >= 0){
        text = text.replace(word, "*".repeat(word.length))
    }
    console.log(text);
}
censoredWords('A small sentence with some words','small');
console.log('----------');
censoredWords('Find the hidden word', 'hidden');