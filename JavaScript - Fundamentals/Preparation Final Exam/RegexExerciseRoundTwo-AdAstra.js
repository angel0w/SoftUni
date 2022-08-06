function adAstra(data) {
    let regex = /(\||\#)(?<product>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/gm

    let text = data[0];
    let match = regex.exec(text);
    let totalCalories = 0;
    let perDay = 2000;
    let days = 0;
    let arr = [];

    while(match) {

        let productName = match.groups.product;
        let dateProduct = match.groups.date;
        let caloriesProduct= Number(match.groups.calories);

        totalCalories += caloriesProduct;
        
        arr.push(`Item: ${productName}, Best before: ${dateProduct}, Nutrition: ${caloriesProduct}`)

        match = regex.exec(text);
    }
    
    days = Math.floor(totalCalories / perDay);
    console.log(`You have food to last you for: ${days} days!`);

    for (let line of arr) {
        console.log(line);
    }
}
adAstra([
    "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
console.log("---================---");
adAstra([
    "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
console.log("---================---");
adAstra(["Hello|#Invalid food#19/03/20#450|$5*(@"]);
