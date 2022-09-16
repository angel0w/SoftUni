function wordsUppercase (input) {
    console.log(input.split(/[\W]+/).filter(w => w != '').map(w => w.toUpperCase()).join(', '));
}
wordsUppercase('Hi, how are you?');
wordsUppercase('hello');