function usdToBgn (input){
    const usd = 1.79549;
    const bgn = Number(input[0]);
    const sum = usd * bgn;
    console.log(sum);
}
usdToBgn(["22"])
usdToBgn(["100"])
usdToBgn(["12.5"])