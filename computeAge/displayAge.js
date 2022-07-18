import { fmtDate } from "./fmtDate.js";
import { computeAge } from "./computeAge.js";

function displayAge(todayDate) {
  console.log("inside the displayAge function");

  const inDate = document.getElementById("DOB").value;
  let year = parseInt(inDate.substring(0, 4));
  let month = parseInt(inDate.substring(5, 7));
  let day = parseInt(inDate.substring(8, 10));

  const { yyyy: cYear, mm: cMM, dd: cDD } = todayDate;

  let { ageYears, ageMonths } = computeAge(year, month, day, cYear, cMM, cDD);

  let dAge = document.getElementById("displayAge");
  if (!Number.isNaN(ageYears)) {
    dAge.textContent = `${ageYears} Years and ${ageMonths} Months Old`;
  } else {
    dAge.textContent = "could not compute age - enter proper DOB";
  }
}
export { displayAge };
