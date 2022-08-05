function emojiDetector(data) {
    let regex = /(::|\*\*)(?<name>[A-Z]{1}[a-z]{2,})\1/gm;
    let regexNum = /\d/g;
    let text = data[0];

    let allMatches = text.matchAll(regex);
    let allMatchesNum = text.matchAll(regexNum);

    let coolEmojis = [];
    let coolThresHold = 1;
    let emojis = 0;

    for (let num of allMatchesNum) {
        coolThresHold *= Number(num[0]);
    }

    for ( let el of allMatches) {
        let emoji = el.groups.name;
        let sumAllLeters = 0;
        emojis++;
        for (let i = 0; i < emoji.length; i++) {
            sumAllLeters+= emoji.charCodeAt(i);
        }

        if(sumAllLeters >= coolThresHold) {
            coolEmojis.push(el[0]);
        }
    }

    console.log(`Cool threshold: ${coolThresHold}`);
    console.log(`${emojis} emojis found in the text. The cool ones are:`);
    console.log(coolEmojis.join('\n') );
}
emojiDetector([
    "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
console.log("---==========---");
emojiDetector([
    "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**.",
]);
