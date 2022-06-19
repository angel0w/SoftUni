function fruitOrVegetable (input) {
    const product = input[0];

    switch ( product){
        case "banana": console.log("fruit");break;
        case "apple":  console.log("fruit");break;
        case "kiwi": console.log("fruit");break;
        case "cherry":  console.log("fruit");break;
        case "lemon": console.log("fruit");break;
        case "grapes": console.log("fruit");break;
        case "tomato":console.log("vegetable");break
        case "cucumber":console.log("vegetable");break;
        case "pepper":console.log("vegetable");break;
        case "carrot":console.log("vegetable");break;
        default:console.log("unknown");
    } 
}
fruitOrVegetable(["banana"]);
fruitOrVegetable(["apple"]);
fruitOrVegetable(["tomato"]);
fruitOrVegetable(["water"]);