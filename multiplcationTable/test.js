function getInput() {
  console.log("clicked submit ");
  const inDate = document.getElementById("DOB").value;
  console.log(inDate);
  console.log(inDate.valueAsDate);
  year = parseInt(inDate.substring(0, 4));
  month = parseInt(inDate.substring(5, 7));
  day = parseInt(inDate.substring(8, 10));
  console.log(`year=${year} month=${month} day=${day}`);
  day = day + 1;
  console.log(`${day}`);
  computeAge(month, day, year);
}
function clickyear(yy) {
  console.log("clicked year");
  console.log(`year=${yy}`);
}
function computeAge(mDOB, dDOB, yDOB) {
  console.log(`MONTH DOB=${mDOB} DAY=${dDOB} YEAR=${yDOB}`);
  const today = new Date();
  //console.log(today);
  const yyyy = today.getFullYear();
  console.log(`current year=${yyyy}`);
  const div = document.createElement("div");
  div.setAttribute("class", "dov-div");
  const header = document.createElement("h1");
  header.innerHTML = "Year=" + yDOB;
  header.setAttribute("class", "dov");
  div.append(header);
  const currYear = document.createElement("h1");
  currYear.innerHTML = "current Year=" + yyyy;
  currYear.setAttribute("class", "dov");
  div.append(currYear);

  const body = document.querySelector("body");
  body.append(div);
  buttonYear = document.createElement("button");
  buttonYear.append("show Year");
  buttonYear.setAttribute("onclick", `clickyear(${yDOB})`);
  body.append(buttonYear);
}
console.log("in test script ---");
