console.log("at start of script.js in computeAge app");
let state = 1;
function handleClickChange() {
  console.log("click change button");
  const floatContainer = document.getElementById("float-container");
  if (state == 1) {
    state = 0;
    floatContainer.setAttribute("class", "float-container");
  } else {
    floatContainer.setAttribute("class", "float-container-alt");
    state = 1;
  }
  console.log(document.getElementById("green").textContent);
  outText = document.getElementById("output-text");
  calc = document.getElementById("green").textContent;
  calc = calc * 5;
  outText.textContent = calc;
}
