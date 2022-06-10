function printCertificate(grade, nameArr) {
  printHeader();
  printName(nameArr);
  formatGrade(grade);

  function printHeader() {
    console.log("~~~-   {@}   -~~~");
    console.log("~- Certificate -~");
    console.log("~~~-  ~---~  -~~~");
  }

  function printName() {
    console.log(nameArr[0] + " " + nameArr[1]);
  }

  function formatGrade(grade) {
    let desc;
    let formattedGrade = grade.toFixed(2);

    if (grade < 3) {
      desc = "Fail";
      formattedGrade = 2;
    } else if (grade < 3.5) {
      desc = "Poor";
    } else if (grade < 4.5) {
      desc = "Good";
    } else if (grade < 5.5) {
      desc = "Very good";
    } else {
      desc = "Excellent";
    }
    console.log(`${desc} (${formattedGrade})`);
  }
  
}
printCertificate(5.25, ["Peter", "Cater"]);
