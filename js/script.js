
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
    //setting the timeout to 1000 will make it work well as a timer but will add a delay to actions we can lower the intercal timer to somthing lower but i dont want to sacrifice preformence right now
  };
  currentTime();



  const optionMenuTrigger = function() {
    // document.querySelector('section#options').style.display =  'block' ? 'none' : 'block';
     // console.log(document.getElementById('#options').classList.length);
     const options = document.querySelector('#options');
     options.classList.contains('hidden') ? options.classList.remove('hidden') : options.classList.add('hidden');
  }

  document.querySelector('.clickMe').addEventListener('click', optionMenuTrigger);


// cycling month format options
  document.querySelector('#month-narrow').addEventListener('click', (e) => monthDay.month =  'narrow');
  document.querySelector('#month-short').addEventListener('click', (e) => monthDay.month =  'short');
  document.querySelector('#month-long').addEventListener('click', (e) => monthDay.month =  'long');
  document.querySelector('#month-numeric').addEventListener('click', (e) => monthDay.month =  'numeric');
}
clock();
