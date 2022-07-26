function stringSubstring (word, text) {
    givenWord = word.toLowerCase();
    text = text.toLowerCase().split(" ");
    let flag = false;

    for (let word of text) {
        if (givenWord === word) {
            console.log(`${word}`);
            return;
        } 
    }
    
    console.log(`${word} not found!`);
}
stringSubstring('javascript',
                'JavaScript is the best programming language'
);
console.log('~~~~~~~~~~');
stringSubstring('python',
                'JavaScript is the best programming language'
);