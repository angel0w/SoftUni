function addAndRemove(arr) {
  let startNum = 0;
  let newArr = [];

  for (let el of arr) {
    startNum++;
    if (el === "add") {
      newArr.push(startNum);
    } else {
      newArr.pop();
    }
  }

  console.log(newArr.join(" ") || "Empty");
}
// addAndRemove(["add", "add", "add", "add"]);
// addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(["remove", "remove", "remove"]);
