function smallShop(input) {
  const product = input[0];
  const town = input[1];
  const quantity = Number(input[2]);
  let productSum = 0;

  switch (town){
    case "Sofia":
        switch (product){
            case "coffee": productSum = quantity * 0.50;break;
            case "water": productSum = quantity * 0.80;break;
            case "beer": productSum = quantity * 1.20;break;
            case "sweets": productSum = quantity * 1.45;break;
            case "peanuts": productSum = quantity * 1.60;break;
      }
      break;
    case "Plovdiv":
        switch(product){
            case "coffee": productSum = quantity * 0.40;break;
            case "water":productSum = quantity * 0.70;break;
            case "beer":productSum = quantity * 1.15;break;
            case "sweets":productSum = quantity * 1.30;break;
            case "peanuts":productSum = quantity * 1.50;break;
          }
          break;
    case "Varna":
          switch(product){
            case "coffee": productSum = quantity * 0.45;break;
            case "water":productSum = quantity * 0.70;break;
            case "beer":productSum = quantity * 1.10;break;
            case "sweets":productSum = quantity * 1.35;break;
            case "peanuts":productSum = quantity * 1.55;break;
    }
  }
  console.log(productSum);
}
smallShop(["coffee", "Varna", "2"]);
smallShop(["peanuts", "Plovdiv", "1"]);
smallShop(["beer", "Sofia", "6"]);
smallShop(["water", "Plovdiv", "3"]);
smallShop(["sweets", "Sofia", "2.23"]);
