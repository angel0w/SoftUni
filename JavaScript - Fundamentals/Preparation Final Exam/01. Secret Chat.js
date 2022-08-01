function secredChat(data) {
  let secredMsg = data.shift();
  let line = data.shift();
  while (line !== "Reveal") {
    let [command, com1, com2] = line.split(":|:");

    if (command === "ChangeAll") {
      if (secredMsg.includes(com1)) {
        secredMsg = secredMsg.split(com1).join(com2);
        // secredMsg = secredMsg.replaceAll(com1, com2);
        console.log(secredMsg);
      }
    } else if (command === "Reverse") {
      if (!secredMsg.includes(com1)) {
        console.log("error");
      } else {
        let substr = com1.toString();
        let len = substr.length;
        if (secredMsg.includes(substr)) {
          let subIndex = secredMsg.indexOf(substr);
          let sliced = secredMsg.substring(0, subIndex);
          let slicedSubstr = secredMsg
            .substring(subIndex, subIndex + len)
            .split("")
            .reverse()
            .join("");
          let slicedAll = secredMsg.substring(subIndex + len);
          secredMsg = sliced + slicedAll + slicedSubstr;
          console.log(secredMsg);
        }
      }
    } else if (command === "InsertSpace") {
        let wordL = secredMsg.length
        let firsHalf = secredMsg.substring(0,com1);
        let seconcHalf = secredMsg.substring(com1, wordL);
        secredMsg = firsHalf + " " + seconcHalf;
        console.log(secredMsg);
    }

    line = data.shift();
  }
  console.log(`You have a new text message: ${secredMsg}`);
}
secredChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);

console.log("--==========--");

secredChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
