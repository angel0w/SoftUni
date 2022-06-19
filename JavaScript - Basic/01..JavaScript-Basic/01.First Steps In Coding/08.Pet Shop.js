function petShop (input){
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);

    let dogSum = 2.50 * dogFood;
    let catSum = 4 * catFood;
    let finalSum = dogSum + catSum;
    console.log(`${finalSum} lv.`)
}
petShop(["13","9"])