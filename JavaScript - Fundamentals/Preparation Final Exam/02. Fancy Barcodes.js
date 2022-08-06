function fancyBarcodes(data) {
    let givenBarcodes = data.shift();

    let regex = /@#+(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;


    for (let i = 0; i < givenBarcodes; i++) {
        let currentBarcode = data[i];
        let match = regex.exec(currentBarcode);
        let concat = '';
        let counter = 0;
        if (match === null) {
            console.log(`Invalid barcode`);
        } else {
            let barcode = match[1];
            for (let el of barcode) {
                if (el.charCodeAt() >= 48 && el.charCodeAt() <= 57){
                    concat+=el;
                    counter++;
                }
            }
           
            if (counter === 0) {
                concat = "00"
            }
            console.log(`Product group: ${concat}`);
        }
    }
}
fancyBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
console.log("---=============---");
fancyBarcodes([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#",
]);
