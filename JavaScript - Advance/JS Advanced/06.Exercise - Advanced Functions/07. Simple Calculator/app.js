function calculator() {
    let input1;
    let input2;
    let result;

    function init(selector1, selector2, resultSelector) {
        input1 = document.querySelector(selector1)
        input2 = document.querySelector(selector2)
        result = document.querySelector(resultSelector)
    }

    function add() {
        result.value = Number(input1.value) + Number(input2.value);

    }

    function subtract() {
        result.value = Number(input1.value) - Number(input2.value);
    }

    return obj = {
        init,
        add,
        subtract
    }
}
const calculate = calculator ();

calculate.init('#num1', '#num2', '#result')


// function calculator() {
//     let fieldOne = null;
//     let fieldTwo = null;
//     let result = null;
//     return {
//       init(selector1, selector2, resultSelector) {
//         fieldOne = document.querySelector(selector1);
//         fieldTwo = document.querySelector(selector2);
//         result = document.querySelector(resultSelector);
//       },
//       add() {
//         result.value = Number(fieldOne.value) + Number(fieldTwo.value);
//       },
//       subtract() {
//         result.value = Number(fieldOne.value) - Number(fieldTwo.value);
//       }
//     };
//   }