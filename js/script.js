
const clock = function() {
  const hoursMinutes = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  const monthDay = {
    month: 'numeric',
    day: 'numeric',

  }
  let newdate = new Date();

  const locale = navigator.language;
  const currentTime = function() {
    newdate = new Date();
    document.querySelector('.monthDay').innerText = new Intl.DateTimeFormat(locale, monthDay).format(newdate);
    document.querySelector('.clockdata').innerText = new Intl.DateTimeFormat(locale, hoursMinutes).format(newdate);
    let t = setTimeout(function(){currentTime()} , 1000);
  };
  currentTime();

// proof that i can change options of the clock with command
  document.querySelector('.clickMe').addEventListener('click', (e) => monthDay.month =  'long');


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
