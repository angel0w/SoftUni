function modernTimesOfHashTag (input) {
    
    let sentence = input.split(" ");
    
    for (let word of sentence) {
        if(word.startsWith("#") && word.length > 1) {
            let flag = true;
            let lowerWords = word.toLowerCase();
            
            for(let i = 1; i < lowerWords.length; i++){
                if (lowerWords.charCodeAt(i) < 97 || lowerWords.charCodeAt(i) > 122){
                    flag = false;
                    break;
                }
            }
            if(flag){
                console.log(word.slice(1));
            }
        }
    }
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');