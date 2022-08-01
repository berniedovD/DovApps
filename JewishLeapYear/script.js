import { jewishLeapYear } from "./displayJewishCycle.js";
import { fmtDate } from "./fmtDate.js";

console.log("at top of script.js");

let todayDt = fmtDate(new Date());

document
  .getElementById("subBtn")
  .addEventListener("click", () => jewishLeapYear());

document
  .getElementById("reload")
  .addEventListener("click", () => location.reload());
