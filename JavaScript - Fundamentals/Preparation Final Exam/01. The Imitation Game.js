function theImitationGame (input) {
    let inputL = input.length
    let encryptedMsg = input.shift();

    for (let i = 0; i < inputL - 2; i++) {
        let [command, com1, com2] = input[i].split("|");


        if (command === 'ChangeAll') {
            while(encryptedMsg.includes(com1)) {
                encryptedMsg = encryptedMsg.replace(com1,com2);
            }

        } else if (command === 'Insert') {
            encryptedMsg = encryptedMsg.substring(0, com1) + com2 + encryptedMsg.substring(com1);
        } else if (command === 'Move') {
            let sliced = encryptedMsg.slice(0, com1);
            encryptedMsg = encryptedMsg.substring(com1) + sliced;
        }
    }

    console.log(`The decrypted message is: ${encryptedMsg}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
console.log('~~~~~~~');
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
]);