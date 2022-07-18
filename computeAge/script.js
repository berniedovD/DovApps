const today = new Date();
console.log(today);
const yyyy = today.getFullYear();
const mm = today.getMonth() + 1;
const dd = today.getDate();
const fmtToday = `Today's Date=${mm}/${dd}/${yyyy}`;
showToday = document.getElementById("todayd");
console.log(showToday);
showToday.textContent = fmtToday;

function displayAge() {
  console.log("inside the computeAge function");
  const inDate = document.getElementById("DOB").value;
  year = parseInt(inDate.substring(0, 4));
  month = parseInt(inDate.substring(5, 7));
  day = parseInt(inDate.substring(8, 10));
  const today = new Date();
  console.log(today);
  const yyyy = today.getFullYear();
  const mm = today.getMonth() + 1;
  const dd = today.getDate();

  let dAge = document.getElementById("displayAge");
  let age = computeAge(year, month, day, yyyy, mm, dd);
  const { ageYears, ageMonths } = age;
  if (!Number.isNaN(ageYears)) {
    dAge.textContent = `${ageYears} Years and ${ageMonths} Months Old`;
  } else {
    dAge.textContent = "could not compute age - enter proper DOB";
  }
}

function computeAge(yDOB, mDOB, dDOB, yCur, mCur, dCur) {
  console.log(`DOB =${yDOB} ${mDOB} ${dDOB}`);
  console.log(`today= ${yCur}-${mCur}-${dCur}`);
  let ageYears = yyyy - yDOB;
  if (mCur < mDOB) {
    ageYears = ageYears - 1;
    exMonths = mDOB - mCur;
    ageMonths = 12 - exMonths;
  } else {
    exMonths = mCur - mDOB;
    ageMonths = exMonths;
  }

  return { ageYears: ageYears, ageMonths: ageMonths };
}
