function adAstra(input) {
    
    let caloriesForDay = 2000;
    let sumOfCalories = 0;

    let regex = /(#|\|)(?<productName>[A-Z a-z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\d*\1(?<calories>\d{1,5})\1/gm
    let match = regex.exec(input);
    let arr = [];

    while(match) {
        let product = match.groups.productName;
        let date = match.groups.date;
        let calories = +match.groups.calories;

        sumOfCalories += calories;

        arr.push({Product: product, ProductDate: date, Calories: calories});
        match = regex.exec(input);
    }

    let foodForDays = Math.floor(sumOfCalories / caloriesForDay);
    console.log(`You have food to last you for: ${foodForDays} days!`);
    

    for (const iterator of arr) {
        console.log(`Item: ${iterator.Product}, Best before: ${iterator.ProductDate}, Nutrition: ${iterator.Calories}`);
    }
}
adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);

console.log("~~~~~~~");

adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);

