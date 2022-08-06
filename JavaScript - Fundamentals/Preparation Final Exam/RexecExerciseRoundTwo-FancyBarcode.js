function fancyBarcode(data) {
    let n = data.shift();

    for (let i = 0; i < n; i++) {
        let regex = /@#+(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/gm;
        let barcode = data[i];
        let match = regex.exec(barcode);
        let buff = "";
        let counter = 0;


        if (match === null) {
            console.log('Invalid barcode');
        } else {
            for (const ch of match[1]) {
                if (ch.charCodeAt() >= 48 && ch.charCodeAt() <= 57) {
                    buff += ch;
                    counter++;
                }
            }
            if (counter === 0) {
                buff = '00';
            }
            console.log(`Product group: ${buff}`);
        }

    }
}
fancyBarcode(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
console.log("---==================---");
fancyBarcode([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#",
]);
