import { displayAge } from "./displayAge.js";
import { fmtDate } from "./fmtDate.js";
function reloadPage() {
  console.log("in reloadPage");
  location.reload();
}
console.log("at top of script.js");
const today = new Date();
const { fmtDate: fmtToday } = fmtDate(today);
let showToday = document.getElementById("todayd");
showToday.textContent = fmtToday;
let subBtn = document.getElementById("subBtn");
subBtn.addEventListener("click", displayAge);
let resetBtn = document.getElementById("reload");
resetBtn.addEventListener("click", reloadPage);
