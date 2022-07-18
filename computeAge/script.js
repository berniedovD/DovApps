import { computeAge } from "./computeAge.js";

function fmtDate(dateOBJ) {
  console.log("inside fmtDate");
  console.log(today);
  const yyyy = today.getFullYear();
  const mm = today.getMonth() + 1;
  const dd = today.getDate();
  const fmtToday = `Today's Date=${mm}/${dd}/${yyyy}`;
  const retDate = { fmtDate: fmtToday, mm: mm, dd: dd, yyyy: yyyy };
  return retDate;
}

function displayAge() {
  console.log("inside the displayAge function");
  console.log("document ...");
  console.log(document);
  const inDate = document.getElementById("DOB").value;
  console.log("inDate ...");
  console.log(inDate);
  let DOB = fmtDate(inDate);
  let year = DOB.yyyy;

  let month = DOB.mm;
  let day = DOB.dd;
  const today = new Date();
  const { fmtDate: fmtToday } = fmtDate(today);
  console.log(`year=${year}`);
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
subBtn.addEventListener("click", displayAge());
