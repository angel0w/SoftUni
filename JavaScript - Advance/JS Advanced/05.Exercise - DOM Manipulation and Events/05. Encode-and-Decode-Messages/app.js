function encodeAndDecodeMessages() {
    let textarea = document.querySelectorAll('textarea');
    let btn = document.querySelectorAll('button');

    btn[0].addEventListener('click', encode);
    btn[1].addEventListener('click', decode);

    function encode (e) {
        let encodeMessage = '';
        let input = textarea[0].value;

        for (let i = 0;  i < input.length; i++) {
            encodeMessage += String.fromCharCode(input[i].charCodeAt(0) + 1);
        }
        
        textarea[1].value = encodeMessage;
        textarea[0].value = ''
    }

    function decode(e) {
        let decodeMessage = '';
        let input = textarea[1].value;

        for (let i = 0;  i < input.length; i++) {
            decodeMessage += String.fromCharCode(input[i].charCodeAt(0) - 1);
        }

        textarea[1].value = decodeMessage;
    }
}