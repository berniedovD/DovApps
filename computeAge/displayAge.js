function displayAge() {
  console.log("inside the displayAge function");
  const inDate = document.getElementById("DOB").value;
  let year = parseInt(inDate.substring(0, 4));
  let month = parseInt(inDate.substring(5, 7));
  let day = parseInt(inDate.substring(8, 10));

  const today = new Date();
  const { fmtDate: fmtToday } = fmtDate(today);
  const ltoday = new Date();
  const { fmtDate: lfmtToday, yyyy, mm, dd } = fmtDate(ltoday);

  let { ageYears, ageMonths } = computeAge(year, month, day, yyyy, mm, dd);

  let dAge = document.getElementById("displayAge");
  if (!Number.isNaN(ageYears)) {
    dAge.textContent = `${ageYears} Years and ${ageMonths} Months Old`;
  } else {
    dAge.textContent = "could not compute age - enter proper DOB";
  }
}
export { displayAge };
