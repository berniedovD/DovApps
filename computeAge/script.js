import { displayAge } from "./displayAge.js";
import { fmtDate } from "./fmtDate.js";

console.log("at top of script.js");

let todayDt = fmtDate(new Date());
const { fmtDate: outDate } = todayDt;
document.getElementById("todayd").textContent = outDate;

document
  .getElementById("subBtn")
  .addEventListener("click", () => displayAge(todayDt));

document
  .getElementById("reload")
  .addEventListener("click", () => location.reload());
