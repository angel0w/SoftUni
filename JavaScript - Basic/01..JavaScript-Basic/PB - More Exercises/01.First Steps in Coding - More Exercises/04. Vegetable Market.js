function vegetableMarket (input){
    const euro = 1.94;

    const vegetableKgPrice = Number(input[0]);
    const fruitKgPrice = Number(input[1]);
    const vegetableKgSum = Number(input[2]);
    const fruitKgSum = Number(input[3]);

    const vegeSum = vegetableKgSum * vegetableKgPrice;
    const fruitSum = fruitKgSum * fruitKgPrice;

    const allSum = vegeSum + fruitSum;

    const euroSum = allSum / euro;


    console.log(euroSum.toFixed(2));
}
vegetableMarket(["0.194","19.4","10","10"])
vegetableMarket(["1.5","2.5","10","10"])