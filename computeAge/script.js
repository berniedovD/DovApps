import { computeAge } from "./computeAge.js";

function fmtDate(dateOBJ) {
  console.log("inside fmtDate");
  console.log(dateOBJ);
  const yyyy = dateOBJ.getFullYear();
  const mm = dateOBJ.getMonth() + 1;
  const dd = dateOBJ.getDate();
  const fmtToday = `Today's Date=${mm}/${dd}/${yyyy}`;
  const retDate = { fmtDate: fmtToday, mm: mm, dd: dd, yyyy: yyyy };
  console.log("returning retDate ...");
  console.log(retDate);
  return retDate;
}

function displayAge() {
  console.log("inside the displayAge function");
  const inDate = document.getElementById("DOB").value;
  console.log("inDate ...");
  console.log(inDate);
  let year = parseInt(inDate.substring(0, 4));
  let month = parseInt(inDate.substring(5, 7));
  let day = parseInt(inDate.substring(8, 10));

  console.log(`DOByear=${year} DOBmm=${month} DOBdd=${day}`);

  const today = new Date();
  const { fmtDate: fmtToday } = fmtDate(today);
  console.log(`year=${year}`);
  const ltoday = new Date();
  const { fmtDate: lfmtToday, yyyy, mm, dd } = fmtDate(ltoday);
  let dAge = document.getElementById("displayAge");
  let age = computeAge(year, month, day, yyyy, mm, dd);
  const { ageYears, ageMonths } = age;
  if (!Number.isNaN(ageYears)) {
    dAge.textContent = `${ageYears} Years and ${ageMonths} Months Old`;
  } else {
    dAge.textContent = "could not compute age - enter proper DOB";
  }
}
const today = new Date();
const { fmtDate: fmtToday } = fmtDate(today);

let showToday = document.getElementById("todayd");
console.log(showToday);
showToday.textContent = fmtToday;
let subBtn = document.getElementById("subBtn");
subBtn.addEventListener("click", displayAge);
console.log("here is the button ..");
console.log(subBtn);
