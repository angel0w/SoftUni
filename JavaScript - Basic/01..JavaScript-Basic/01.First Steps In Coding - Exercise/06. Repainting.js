function repainting(input) {
  const nylonPrice = 1.5;
  const paintPrice = 14.5;
  const thinnerPrice = 5;
  const extraNylon = 2;
  const bagCost = 0.4;

  const nylon = Number(input[0]);
  const paint = Number(input[1]);
  const thinner = Number(input[2]);
  const workHours = Number(input[3]);

  const nylonCost = (nylon + extraNylon) * nylonPrice;
  const paintCost = (paint + paint * 0.1) * paintPrice;
  const thinnerCost = thinnerPrice * thinner;

  const allCost = nylonCost + paintCost + thinnerCost + bagCost;

  const oneHourCost = allCost * 0.3;

  const hoursCost = workHours * oneHourCost;

  const allSum = allCost + hoursCost;
  console.log(allSum);
}
repainting(["10 ", "11 ", "4 ", "8 "]);

repainting(["5 ", "10 ", "10 ", "1 "]);

// function repainting(input) {
//   const naylonSum = 1.5;
//   const paintSum = 14.5;
//   const paintThinnerSum = 5;
//   const extraPaint = 0.1;
//   const extraNaylon = 2;
//   const bagPrice = 0.4;

//   const naylon = Number(input[0]);
//   const paint = Number(input[1]);
//   const paintThinner = Number(input[2]);
//   const workHours = Number(input[3]);

//   const naylonCost = ( naylon + extraNaylon) * naylonSum;
//   const paintCost = (paint + (extraPaint * paint)) * paintSum;
//   const thinnerCost = paintThinnerSum * paintThinner;

//   const materialCost = naylonCost + paintCost + thinnerCost + bagPrice;

//   const hourCost = ( materialCost * 0.3) * workHours;
//   const allCost = materialCost + hourCost
//   console.log(allCost);
// }
// repainting(["10 ", "11 ", "4 ", "8 "]);
// repainting(["5 ", "10 ", "10 ", "1 "]);
