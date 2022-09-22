function calc() {
    // TODO: sum = num1 + num2
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    let sum = a + b;

    document.getElementById('sum').value = sum;
    // if (Number.isNaN(sum)) {
    //     document.getElementById('sum').value = 'Error! Please enter numbers!';
    // } else {
    //     document.getElementById('sum').value = sum;
    // }
}
