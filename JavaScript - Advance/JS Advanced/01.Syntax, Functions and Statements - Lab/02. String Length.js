function stringLength (str1, str2,str3) {
    let str1Leng = str1.length;
    let str2Leng = str2.length;
    let str3Leng = str3.length;
    let sumOfLengts = str1Leng + str2Leng + str3Leng;
    let avgSumOfLengths = Math.floor(sumOfLengts / 3);

    console.log(sumOfLengts);
    console.log(avgSumOfLengths);
}
stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');