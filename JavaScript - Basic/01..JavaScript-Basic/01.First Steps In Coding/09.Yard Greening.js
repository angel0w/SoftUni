function yardGreening (input){
    let metters = Number(input[0]);

    let price = metters * 7.61;
    let discount = 0.18 * price;

    let finalSum = price - discount;
    console.log(`The final price is: ${finalSum} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(["150"])

