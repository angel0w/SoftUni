function oddOccurrences (input) {
    let result = {}
    // let result = new Map();
    let words = input.split(" ");

    for(let word of words) {
        word = word.toLowerCase();

        if (!result[word]){
        result[word] = 0
        }

        // if (!result.has(word)){
        //     result.set(word, 0);
        // }

        let oldValue = result[word];
        result[word] = oldValue + 1;
        // let oldValue = result.get(word);
        // result.set(word, oldValue + 1);
        
    }

     let filterResult = Object.entries(result).filter(([key,value]) => {
    return value % 2 !== 0;
    });

    // let filterResult = Array.from(result).filter(([key,value]) => {
    //     return value % 2 !== 0;
    // });
    
    let buff = '';

    for( let[ k,v] of filterResult){
        buff += k + " ";
    }
    console.log(buff);

    // console.log(words);
        // if (!result[word]){
        // result[word] = 0
        // }
        // let oldValuye = result[word]'
        // result[word] = oldValue + 1;
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');