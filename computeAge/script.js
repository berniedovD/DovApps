import { displayAge } from "./displayAge.js";
import { fmtDate } from "./fmtDate.js";

console.log("at top of script.js");

const { fmtDate: outDate } = fmtDate(new Date());
document.getElementById("todayd").textContent = outDate;

document.getElementById("subBtn").addEventListener("click", displayAge);

document
  .getElementById("reload")
  .addEventListener("click", () => location.reload());
