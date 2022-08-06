function mirrorWords(data) {
    let regex = /(@|#)(?<word>[A-Za-z]{3,})\1(@|#)(?<word2>[A-Za-z]{3,})\1/gm;
    
    let match = regex.exec(data);
    let validPair = 0;
    let arr = [];

    while (match) {
        validPair++;
        
        let w1 = match.groups.word;
        let w2 = match.groups.word2;
        let w2Rev = w2.split("").reverse().join("");
        if (w1 === w2Rev) {
            arr.push(`${w1} <=> ${w2}`);
        }

        match = regex.exec(data)
    }


    if (validPair > 0) {
        console.log(`${validPair} word pairs found!`);


    } else {
        console.log(`No word pairs found!`);
    }

    if (arr.length > 0) {
        console.log(`The mirror words are:\n${arr.join(", ")}`);
    } else {
        console.log(`No mirror words!`);
    }
}
mirrorWords([
    "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
console.log("---===============---");
mirrorWords(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
console.log("---===============---");
mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
