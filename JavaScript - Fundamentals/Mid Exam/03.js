function chatLogger(array) {
    let chat = [];


    for ( let i = 0; i < array.length; i++) {
        let curCmd = array[i].split(' ');

        let cmd = curCmd[0];
        let msg = curCmd[1];
        let ifIncludes = chat.indexOf(msg);

        if (cmd === "Chat") {
            chat.push(msg);

        } else if (cmd === "Delete") {
            if(ifIncludes >= 0) {
                chat.splice(ifIncludes, 1);
            }

        } else if (cmd === "Edit") {
            if(ifIncludes >= 0) {
                chat.splice(ifIncludes, 1);
                chat.splice(ifIncludes, 0, curCmd[2]);
            }

        } else if (cmd === "Pin") {
            if(ifIncludes >= 0) {
                let pinnedMassage = chat.splice(ifIncludes, 1).toString();
                chat.push(pinnedMassage);
            }

        } else if (cmd === "Spam") {
            for ( let i = 1; i < curCmd.length; i++) {
                chat.push(curCmd[i]);
            }

        } 
    }
    
    console.log(chat.join('\n'));
}
chatLogger(["Chat Hello",
"Chat darling",
"Edit darling Darling",
"Spam how are you",
"Delete Darling",
"end"])
;

console.log('----------------------');

chatLogger(["Chat Hello",
"Delete John",
"Pin Hi",
"end"])
;

console.log('----------------------');

chatLogger(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"])
;
