function gcd(num1, num2) {
    while (num1 !== num2) {
        if (num1 > num2) {
            num1 -= num2;
        } else {
            num2 -= num1;
        }
    }
    console.log(num1);
}
gcd(15, 5);
gcd(2154, 458);
