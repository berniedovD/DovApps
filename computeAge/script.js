import { displayAge } from "./displayAge.js";
import { fmtDate } from "./fmtDate.js";

console.log("at top of script.js");
const { fmtDate: fmtToday } = fmtDate(new Date());
document.getElementById("todayd").textContent = fmtToday;

let subBtn = document.getElementById("subBtn");
subBtn.addEventListener("click", displayAge);
let resetBtn = document.getElementById("reload");
resetBtn.addEventListener("click", () => location.reload());
