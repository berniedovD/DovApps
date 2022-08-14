import { fmtDate } from "./fmtDate.js";
import { computeAge } from "./computeAge.js";
function getJewishMonth(monthName) {
  const monthList = [
    { name: "Tishrei", mNum: 1, tNum: 7, days: 30 },
    { name: "Cheshvan", mNum: 2, tNum: 8, days: 29, optDays: 30 },
    { name: "Kislev", mNum: 3, tNum: 9, days: 30, optDays: 29 },
    { name: "Tevet", mNum: 4, tNum: 10, days: 29 },
    { name: "Shevat", mNum: 5, tNum: 11, days: 30 },
    { name: "Adar", mNum: 6, tNum: 12, days: 29 },
    { name: "Nisan", mNum: 7, tNum: 1, days: 30 },
    { name: "Iyar", mNum: 8, tNum: 2, days: 29 },
    { name: "Sivan", mNum: 9, tNum: 3, days: 30 },
    { name: "Tamuz", mNum: 10, tNum: 4, days: 29 },
    { name: "Av", mNum: 11, tNum: 5, days: 30 },
    { name: "Elul", mNum: 12, tNum: 6, days: 29 },
  ];
  const jYear = [{ day: 7, hour: 18, part: 0 }];

  const fourGates = [{ 1: [{ 1: "123" }] }];

  for (const month of monthList) {
    console.log(month);
  }
}
function jewishLeapYear() {
  console.log("inside the jewishLeapYear function");
  getJewishMonth();
  const NUMBER_OF_YEARS_IN_CYCLE = 19;
  const jYear = document.getElementById("creationYearID").value;
  const num19yearCycles = parseInt(jYear / NUMBER_OF_YEARS_IN_CYCLE);
  console.log(`num19yearCycles=${num19yearCycles}`);
  const leapyears = [3, 6, 8, 11, 14, 17, 19];
  const cycleYear1 = num19yearCycles * NUMBER_OF_YEARS_IN_CYCLE;
  const yearInCycle = jYear - cycleYear1;
  let yt7 = jYear * 7 + 1;
  let mdt7 = yt7 % 19;
  console.log(`yt7 = ${yt7} mdt7=${mdt7} yearInCycle=${yearInCycle}`);
  console.log(leapyears);

  let displayAnswer = document.getElementById("displayLeap");
  // first of two ways to determine a leapyear is (year*7+1) mod (19) < 7
  if (mdt7 < 7) {
    displayAnswer.textContent = `${jYear}` + " Is a Leap year";
  } else {
    displayAnswer.textContent = `${jYear}` + " Is NOT a Leap year";
  }
  // second way = is the year in cycle in the list above (3,6,8,11,14,17,19)
  if (leapyears.includes(yearInCycle)) {
    console.log(`year ${yearInCycle} is a leapyear`);
  } else {
    console.log(`year ${yearInCycle} is NOT a  leapyear`);
  }
}
export { jewishLeapYear };
