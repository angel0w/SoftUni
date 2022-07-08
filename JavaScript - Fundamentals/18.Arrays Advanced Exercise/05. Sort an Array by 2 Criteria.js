function sortAnArrayByTwoCriteria(arr) {
  let sortedArray = arr.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
  });

  sortedArray.forEach((element) => {
    console.log(element);
  });
}
sortAnArrayByTwoCriteria(["alpha", "beta", "gamma"]);
// sortAnArrayByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
