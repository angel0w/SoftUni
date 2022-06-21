function bonusScoringSystem(input) {
  let studentCount = Number(input.shift());
  let lecturesCount = Number(input.shift());
  let initialBonus = Number(input.shift());
  let students = input.slice().map((x) => Number(x));
  let maxBonus = 0;
  let maxLectures = 0;

  for (let i = 0; i < studentCount; i++) {
    let currentLectureCount = students[i];
    let currentBonus =
      (currentLectureCount / lecturesCount) * (5 + initialBonus);
    if (currentBonus > maxBonus) {
      maxBonus = currentBonus;
      maxLectures = currentLectureCount;
    }
  }

  maxBonus = Math.ceil(maxBonus);

  console.log(`Max bonus: ${maxBonus.toFixed(2)}`);
  console.log(`The Student has attented ${maxLectures} lectures.`);
}
bonusScoringSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);
