function radiansToDegrees (input) {
    const radians = Number(input[0]);
    const degrees = radians * 180 / Math.PI;

    console.log(degrees);
}
radiansToDegrees(["3.1416"])
radiansToDegrees(["6.2832"])