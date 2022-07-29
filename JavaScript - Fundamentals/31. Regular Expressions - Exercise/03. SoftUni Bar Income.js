function softuniBarIncome(data) {
  let totalSum = 0;

  for (let line of data) {
    if (line === "end of shift") {
      break;
    }

    let regex =
      /%(?<customer>[A-Z][a-z]*)%[^.|*?]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+\.?\d+)\$/gm;
    let match = regex.exec(line);

    if (match === null) {
      continue;
    }

    let bill = +match.groups.count * +match.groups.price;
    console.log(
      `${match.groups.customer}: ${match.groups.product} - ${bill.toFixed(2)}`
    );
    totalSum += bill;
  }
  console.log(`Total income: ${totalSum.toFixed(2)}`);
}
softuniBarIncome([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);

console.log("~~~~~~~");

softuniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
