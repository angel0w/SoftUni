
function trainingLab(input) {
  const width = Number(input[0]);
  const height = Number(input[1]);
  const corridor = 1;
  const workPlaceW = 0.7;
  const workPlaceH = 1.2;
  const freespace = width - corridor;
  const deskInRow = freespace / workPlaceW;
  const deskPerRow = Math.floor(deskInRow);

  const deskInCollum = height - workPlaceH;
  const deskPerCollum = Math.floor(deskInCollum);

  const result = deskPerRow * deskPerCollum;

const finalResult = result - 3;

  console.log(finalResult);
}
trainingLab(["15", "8.9"]);
