function mirrorWords (text) {
    let pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/mg
    let array = [];
    let match = pattern.exec(text);

    let matchsCount = 0;

    while (match !== null) {
        matchsCount++

        let match1 = match[2];
        let match2 = match[3];

        match2 = match2.split("").reverse().join("")

        // ако са валидни огледални двойки
        if (match1 === match2) {
            validPairs++;
            array.push(`${match[2]} <=> ${match[3]}`);
        }
     match = pattern.exec(text);
    }

    if (matchsCount <= 0) {
        // •	If you don`t find any valid pairs, print: "No word pairs found!"
        console.log(`No word pairs found!`);
    } else {
        // •	If you find valid pairs print their count: "{valid pairs count} word pairs found!"
        console.log(`${matchsCount} word pairs found!`);
    }



    // •	If there are no mirror words, print: "No mirror words!"
    if (array.length <= 0) {
        console.log(`No mirror words!`);
    } else {
    // •	If there are mirror words print:
    //     "The mirror words are:
    // {wordOne} <=> {wordtwo}, {wordOne} <=> {wordtwo}, … {wordOne} <=> {wordtwo}"
        console.log('The mirror words are:');
        console.log(array.join(", "));

    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
console.log('--=========--');
mirrorWords([
    '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'
]);
console.log('--=========--');
mirrorWords([
    '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'
]);
