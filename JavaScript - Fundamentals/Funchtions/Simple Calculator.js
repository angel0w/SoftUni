function simpleCalculator (num1, num2, separator) {
    let res;
    switch (separator) {
        case 'multiply': res = num1 * num2;break;
        // case 'multiply': console.log(res = num1 * num2);break;
        case 'divide': res = num1 / num2;break;
        // case 'divide': console.log(res = num1 / num2);break;
        case 'add' : res = num1 + num2;break;
        // case 'add' : console.log(res = num1 + num2);break;
        case 'subtract': res = num1 - num2;break;
        // case 'subtract': console.log(res = num1 - num2);break;
    }
    return res;
}
console.log(simpleCalculator(5, 5, "multiply")) ;
simpleCalculator(40, 8, "divide");
simpleCalculator(12, 19, "add");
simpleCalculator(50, 13, "subtract");
