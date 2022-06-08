function mathPower(a, b) {
    // let res = Math.pow(a,b);
    // let res = a**b;
      let res = 1;
  for (let i = 0; i < b; i++) {
    res = res * a;
  }
  console.log(res);
}
mathPower(2, 8);
mathPower(3, 4);
