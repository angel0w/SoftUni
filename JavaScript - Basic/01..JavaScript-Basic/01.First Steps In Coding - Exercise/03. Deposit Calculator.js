function depositCalculator(input) {

    const deposit = Number(input[0]);
    const termOfDeposit = Number(input[1]);
    const yearInterestPercent = Number(input[2]);

    const interest = (deposit * yearInterestPercent) / 100;
    const interestAMouth= interest / 12;
    const totalSum = deposit + termOfDeposit * interestAMouth;

    console.log(totalSum);
}
depositCalculator("200 ", "3 ", "5.7 ")