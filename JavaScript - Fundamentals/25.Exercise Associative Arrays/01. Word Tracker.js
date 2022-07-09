function wordTracker (input) {
    let words = input.shift().split(" ");
    let obj = {};

    for (let word of words){
        obj[word] = 0;
    }

    for(let word of input){
        if(obj.hasOwnProperty(word)){
            let oldValue = obj[word];
            obj[word] = oldValue + 1;
        }
    }

    let sortResult = Object.entries(obj).sort(([keyA, valueA],[keyB, valueB]) =>  {
        return valueB - valueA;
    });

    for (let [k,v] of sortResult){
        console.log(k, "-", v);
    }
}
wordTracker([
'this sentence', 
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);