import { jewishLeapYear } from "./displayJewishCycle.js";
import { fmtDate } from "./fmtDate.js";
function onUpCall() {
  console.log("in up call");
}
console.log("at top of script.js");

let todayDt = fmtDate(new Date());

document
  .getElementById("subBtn")
  .addEventListener("click", () => jewishLeapYear());

document
  .getElementById("reload")
  .addEventListener("click", () => location.reload());
let getyear = document.getElementById("creationYearID");
console.log(`getyear= ${getyear}`);
//getyear.setAttribute("onchange", () => jewishLeapYear());
getyear.setAttribute("onkeyup", function keyup() {
  console.log("on key up");
  jewishLeapYear();
});
getyear.addEventListener("change", function () {
  console.log("change");
  jewishLeapYear();
});

console.log(getyear);
/*
document
  .getElementById("creationYear")
  .setAttribute("onchangex", () => jewishLeapYear());
  */
