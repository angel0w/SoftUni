function sortNums(a, b, c) {
  if (a > b && a > c) {
    console.log(a);
    if (b > c) {
      console.log(`${b}\n${c}`);
    } else {
      console.log(`${b}\n${c}`);
    }
  } else if (b > a && b > c) {
    console.log(b);
    if (a > c) {
      console.log(`${a}\n${c}`);
    } else {
      console.log(`${c}\n${a}`);
    }
  } else if (c > a && c > b) {
    console.log(c);
    if (a > b) {
      console.log(`${a}\n${b}`);
    } else {
      console.log(`${b}\n${a}`);
    }
  }
}
sortNums(3, 2, 1);
sortNums(-2, 1, 3);
sortNums(0, 0, 2);
