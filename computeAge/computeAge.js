function computeAge(yDOB, mDOB, dDOB, yCur, mCur, dCur) {
  console.log("Inside computeAge");
  console.log(`DOB =${yDOB} ${mDOB} ${dDOB}`);
  console.log(`today= ${yCur}-${mCur}-${dCur}`);
  let ageYears = yCur - yDOB;
  let exMonths;
  let ageMonths;
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
export { computeAge };
