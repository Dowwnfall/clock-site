'use strict';
const monthDay = {
  month: 'numeric',
  day: 'numeric',

}
const clock = function() {
  const hoursMinutes = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  let newdate = new Date();

  const locale = navigator.language;
  const currentTime = function() {
    newdate = new Date();
    document.querySelector('.monthDay').innerText = new Intl.DateTimeFormat(locale, monthDay).format(newdate);
    document.querySelector('.clockdata').innerText = new Intl.DateTimeFormat(locale, hoursMinutes).format(newdate);
    let t = setTimeout(function(){currentTime()} , 1000);
    document.querySelector('#switchMonth').innerText = monthDay.month;
    document.querySelector('#switchDay').innerText = monthDay.day;
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


// cycling month format options the options should be narrow, short, long, and numeric I could try doing this with select element
  const switchMonth = function() {
    switch (monthDay.month) {
      case 'numeric':
        monthDay.month =  'narrow';
        break;
      case 'narrow':
        monthDay.month =  'short';
        break;
      case 'short':
        monthDay.month =  'long';
        break;
      case 'long':
        monthDay.month =  '2-digit';
        break;
      case '2-digit':
        monthDay.month =  'numeric';
        break;
      default:
        alert('error');
        break;
    }
  }
  const switchDay = function() {
    switch (monthDay.day) {
      case 'numeric':
        monthDay.day = '2-digit'
        break;
        case '2-digit':
          monthDay.day =  'numeric';
          break;
      default:

    }
  }
  document.querySelector('#switchMonth').addEventListener('click', switchMonth);
  document.querySelector('#switchDay').addEventListener('click', switchDay);




  function myFunction_set() {
    const mainColor =  document.querySelector("#mainColor").value;
    if (/^#([0-9A-F]{3}){1,2}$/i.test(mainColor)) {
      document.querySelector(':root').style.setProperty('--main-color', mainColor);
    }else{
      alert('enter a hex color');
    }
}
document.querySelector('#mainColorSubmit').addEventListener('click', myFunction_set);


}
 //  how to check hex                 /^#[0-9A-F]{6}$/i.test('#fffff')




clock();
