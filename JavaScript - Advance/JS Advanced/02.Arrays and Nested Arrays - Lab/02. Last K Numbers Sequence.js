function lastKNumSequence(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let last = result.slice(-k);

        let sum = 0;
        for (let el of last) {
            sum += el;
        }
        result.push(sum);
    }
    return result;
}
lastKNumSequence(6, 3);
lastKNumSequence(8, 2);
