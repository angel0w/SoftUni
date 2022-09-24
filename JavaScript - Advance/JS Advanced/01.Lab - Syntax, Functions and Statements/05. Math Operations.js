function mathOperations(a, b, op) {
    let result;

    switch (op) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        case "%":
            result = a % b;
            break;
        case "**":
            result = a ** b;
            break;
    }

    console.log(result);
}
mathOperations(5, 6, "+");
mathOperations(3, 5.5, "*");
