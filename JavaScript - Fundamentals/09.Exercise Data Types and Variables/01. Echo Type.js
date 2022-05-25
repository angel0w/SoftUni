function echo(input) {
  let type = typeof input;
  console.log(type);

  if (type == "string" || type == "number") {
    console.log(input);
  } else {
    console.log("Parameter is not suitable for printing");
  }
}
echo("Hello, JavaScript!");
// echo(15)
// echo(undefined)
// echo(null)
