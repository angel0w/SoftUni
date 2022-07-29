function replaceRepeatingChars (input) {

    let result = '';
    for (let i = 0; i < input.length;i++ ) {
        let currentChar = input[i];
        let backChar = input[i - 1];

        if (currentChar !== backChar) {
            result += currentChar;
        }
    }
    console.log(result);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
console.log('~~~~~~');
replaceRepeatingChars('qqqwerqwecccwd');