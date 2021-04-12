'use strict';
const monthDay = {
  month: 'numeric',
  day: 'numeric',

}
const clock = function() {
  let backgroundNumber = 0;

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
    document.querySelector('#switchMonth').innerText = `Month:${monthDay.month}`;
    document.querySelector('#switchDay').innerText = `Day:${monthDay.day}`;
    //setting the timeout to 1000 will make it work well as a timer but will add a delay to actions we can lower the intercal timer to somthing lower but i dont want to sacrifice preformence right now
  };
  currentTime();



  const menuTrigger = function() {
    const idthing = this;
     const idSelector = document.querySelector(idthing);
     if (idSelector.classList.contains('hidden')) {
       idSelector.classList.remove('hidden')
       idSelector.classList.add('menu-on')
     } else {
       idSelector.classList.remove('menu-on')
       idSelector.classList.add('hidden')
     }
  }

  document.querySelector('.optionsButton').addEventListener('click', menuTrigger.bind('#options'));
  document.querySelector('.helpButton').addEventListener('click', menuTrigger.bind('#help'));

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

  const switchBackground = function() {
    document.querySelector('body').classList.remove(`background${backgroundNumber}`);
    backgroundNumber < 3 ? backgroundNumber++ : backgroundNumber = 0;
    document.querySelector('body').classList.add(`background${backgroundNumber}`);
  }



  document.querySelector('#switchMonth').addEventListener('click', switchMonth);
  document.querySelector('#switchDay').addEventListener('click', switchDay);
  document.querySelector('#switchBackground').addEventListener('click', switchBackground);



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
