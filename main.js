const $thisYearMonth = document.querySelector('.thisYearMonth');
const $calendarDays = document.querySelector('.mainpage__calendar__day');

const date = new Date();

const renderCalendar = () => {
  const thisYear = date.getFullYear();
  const thisMonth = date.getMonth();
  const thisDay = date.getDate();


  $thisYearMonth.textContent = `${thisYear}.${thisMonth+1}`;

  let prevLast = new Date(thisYear, thisMonth, 0)
  let thisLast = new Date(thisYear, thisMonth+1, 0)

  //저번달 마지막날
  const prevLastDate = prevLast.getDate();
  //저번달 마지막 요일
  const prevLastDay = prevLast.getDay();

  //이번달 마지막날
  const thisLastDate = thisLast.getDate();
  //이번달 마지막 요일
  const thisLastDay = thisLast.getDay();

  let daysArray = [];

  //달력 첫번째 칸에 들어갈 숫자
  const firstDayCalc = prevLastDate - prevLastDay;
  //달력 마지막 칸에 들어갈 숫자
  const lastDayCalc = 6 - thisLastDay;

  //자반달이 달력에 들어가는 수
  for(let i = firstDayCalc;  i <= prevLastDate; i++ ){
    daysArray.push(i);
  }

  //이번달이 달력에 들아가는 수
  for(let i = 1; i <= thisLastDate; i++ ){
    daysArray.push(i);
  }

  //다음달이 달력에 들어가는 수 
  for(let i = 1; i <= lastDayCalc; i++){
    daysArray.push(i);
  }
  
  const today = new Date();
  const todayMonth = today.getMonth()+1;

  daysArray.forEach((date, i)=>{
    if(i >= 0 && i <= prevLastDay || i >= daysArray.length - lastDayCalc){
      daysArray[i] = `<div class="NotThisMonth">${date}</div>`
    }
    else if(i === thisDay + prevLastDay && thisMonth+1 === todayMonth ){
      daysArray[i] = `<div class="today">${date}</div>`;
    }
    else{
      daysArray[i] = `<div>${date}</div>`;
    }
  })

  $calendarDays.innerHTML = daysArray.join(' ');
}

renderCalendar();

const $calendarLeft = document.querySelector('.calendar__left');
$calendarLeft.addEventListener('click',()=>{
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
})

const $calendarRight = document.querySelector('.calendar__right');
$calendarRight.addEventListener('click',()=>{
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
})
