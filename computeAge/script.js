import { displayAge } from "./displayAge.js";
import { fmtDate } from "./fmtDate.js";
console.log("at top of script.js");
const today = new Date();
const { fmtDate: fmtToday } = fmtDate(today);
let showToday = document.getElementById("todayd");
showToday.textContent = fmtToday;
let subBtn = document.getElementById("subBtn");
subBtn.addEventListener("click", displayAge);
