function squareOfStars(input) {
    if (typeof input == "number") {
        for (let i = 0; i < input; i++) {
            console.log("* ".repeat(input));
        }
    } else {
        for (let i = 0; i < 5; i++) {
            console.log("* ".repeat(5));
        }
    }
}
squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);
