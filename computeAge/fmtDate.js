function fmtDate(dateOBJ) {
  console.log("inside fmtDate");
  const yyyy = dateOBJ.getFullYear();
  const mm = dateOBJ.getMonth() + 1;
  const dd = dateOBJ.getDate();
  const fmtToday = `Today's Date=${mm}/${dd}/${yyyy}`;
  const retDate = { fmtDate: fmtToday, mm: mm, dd: dd, yyyy: yyyy };
  return retDate;
}

export { fmtDate };
