
const clock = function() {
  // const options = {
  //   hour: 'numeric',
  //   minute: 'numeric',
  //   day: 'numeric',
  //   month: 'numeric',
  //   year: 'numeric',
  //   // weekday: 'long',
  // };
  let newdate = new Date();

  const currentTime = function() {
    newdate = new Date();
    const hours = formatDate(newdate.getHours());
    const minutes = formatDate(newdate.getMinutes());
    const seconds = formatDate(newdate.getSeconds());
    const month = formatDate(newdate.getMonth());
    const day = formatDate(newdate.getDay());
    document.querySelector('.monthDay').innerText = `${month}:${day}`;
    document.querySelector('.clockdata').innerText = `${hours}:${minutes}:${seconds}`;
    let t = setTimeout(function(){currentTime()} , 1000);
  };
  const formatDate = (dta) => dta < 10 ? "0" + dta: dta;

  currentTime();
}
clock();




//
// const now = new Date();
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'numeric',
//   year: 'numeric',
//   // weekday: 'long',
// };
