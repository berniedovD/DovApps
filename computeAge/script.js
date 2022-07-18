import { computeAge } from "./computeAge.js";
import { displayAge } from "./displayAge.js";

function fmtDate(dateOBJ) {
  console.log("inside fmtDate");
  const yyyy = dateOBJ.getFullYear();
  const mm = dateOBJ.getMonth() + 1;
  const dd = dateOBJ.getDate();
  const fmtToday = `Today's Date=${mm}/${dd}/${yyyy}`;
  const retDate = { fmtDate: fmtToday, mm: mm, dd: dd, yyyy: yyyy };
  return retDate;
}

const today = new Date();
const { fmtDate: fmtToday } = fmtDate(today);
let showToday = document.getElementById("todayd");
showToday.textContent = fmtToday;
let subBtn = document.getElementById("subBtn");
subBtn.addEventListener("click", displayAge);
