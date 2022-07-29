function maxSequenceOfEqualEl(array) {
    let maxsequence = [];

    for(let i = 0; i < array.length;i++) {
        let currentSeuqence = [];
        for(let j = i; j < array.length; j++){
            if(array[i] === array[j]) {
                currentSeuqence.push(array[i]);
            } else {
                break;
            }
        }
        if(currentSeuqence.length > maxsequence.length){
            maxsequence = currentSeuqence;
        }
    }
        console.log(maxsequence.join(' '));

}
maxSequenceOfEqualEl([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualEl([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualEl([4, 4, 4, 4]);
maxSequenceOfEqualEl([0, 1, 1, 5, 2, 2, 6, 3, 3]);