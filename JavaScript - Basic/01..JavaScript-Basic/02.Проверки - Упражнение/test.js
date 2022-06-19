function solve(input){
    const moviebudget = Number(input[0]);
    const numberOfworkers = Number(input[1]);
    let priceOfCloths = Number(input[2]);
 
    const dekor = moviebudget * 0.1;
    if (numberOfworkers > 150) {
        priceOfCloths *= 0.9;
      }
    const obleklo = numberOfworkers * priceOfCloths;
    const allSumMovie = dekor + obleklo;
    const leftMoney = Math.abs(moviebudget - allSumMovie);
 
    if (moviebudget >= allSumMovie ){
        console.log("Action!");
        console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`);
 
        } else {
            console.log("Not enough money!");
    console.log(`Wingard needs ${leftMoney.toFixed(2)} leva more.`);
    }    
 
 
}
solve(["20000","120","55.5"])
solve(["15437.62","186","57.99"])