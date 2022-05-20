function rounding(rounded, precision) {
  if (precision >= 15) {
    console.log(parseFloat(rounded.toFixed(15)));
  } else {
    console.log(parseFloat(rounded.toFixed(precision)));
  }
}
rounding(10.5, 3);
rounding(3.1415926535897932384626433832795, 2);
rounding(3.1415926535897932384626433832795, 16);
