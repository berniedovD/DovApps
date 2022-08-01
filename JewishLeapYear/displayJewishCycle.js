import { fmtDate } from "./fmtDate.js";
import { computeAge } from "./computeAge.js";

function jewishLeapYear() {
  console.log("inside the jewishLeapYear function");
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
