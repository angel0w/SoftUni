function summerOutfit(input) {
  const degree = Number(input[0]);
  const time = input[1];
  let outfit = "";
  let shoes = "";
  if (degree >= 10 && degree <= 18) {
    switch (time) {
      case "Morning":
        outfit = "Sweatshirt";
        shoes = "Sneakers";
        break;
      case "Afternoon":
        outfit = "Shirt";
        shoes = "Moccasins";
        break;
      case "Evening":
        outfit = "Shirt";
        shoes = "Moccasins";
        break;
    }
  } else if (degree > 18 && degree <= 24) {
    switch (time) {
      case "Morning":
        outfit = "Shirt";
        shoes = "Moccasins";
        break;
      case "Afternoon":
        outfit = "T-Shirt";
        shoes = "Sandals";
        break;
      case "Evening":
        outfit = "Shirt";
        shoes = "Moccasins";
        break;
    }
  } else if (degree >= 25) {
    switch (time) {
      case "Morning":
        outfit = "T-Shirt";
        shoes = "Sandals";
        break;
      case "Afternoon":
        outfit = "Swim Suit";
        shoes = "Barefoot";
        break;
      case "Evening":
        outfit = "Shirt";
        shoes = "Moccasins";
        break;
    }
  }
  console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["9", "Morning"]);
summerOutfit(["22", "Afternoon"]);
summerOutfit(["28", "Evening"]);
