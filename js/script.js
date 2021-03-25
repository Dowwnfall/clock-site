
const clock = function() {
  let newdate = new Date();

  const currentTime = function() {
    newdate = new Date();
    const hours = formatDate(newdate.getHours());
    const minutes = formatDate(newdate.getMinutes());
    const seconds = formatDate(newdate.getSeconds());

    document.querySelector('.clockdata').innerText = `${hours}:${minutes}:${seconds}`;
    let t = setTimeout(function(){currentTime()} , 1000);
  };
  const formatDate = (dta) => dta < 10 ? "0" + dta: dta;

  currentTime();
}
clock();
