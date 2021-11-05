const december = document.querySelector('.future')
const realDay = document.getElementById('day')
const realHour = document.getElementById('hour')
const realMin = document.getElementById('min')
const realSec = document.getElementById('sec')

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'september',
    'October',
    'November',
    'December'
]
const week_Days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

const futureDate = new Date(2021, 11, 25)
let future_month = futureDate.getMonth();
future_month = months[future_month]
let future_day = futureDate.getDay();
future_day = week_Days[future_day]
const future_date = futureDate.getDate();
const future_year = futureDate.getFullYear();



december.innerHTML = `

${future_day} ${future_month} ${future_date}th, ${future_year}`

function getCount() {
    const futureDate_ms = futureDate.getTime();
    const presentDate = new Date()
    const presentDate_ms = presentDate.getTime();

    const diff = futureDate_ms - presentDate_ms;
    
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    const oneSec = 1000;
    function format(item) {
        if(item < 10) {
            return `0${item}`
        } else {
            return item
        }
    }
    const day = Math.floor(diff / oneDay);
    realDay.innerText = format(day);
    const hour = Math.floor((diff % oneDay) / oneHour);
    realHour.innerText = format(hour);
    const minute = Math.floor((diff % oneHour) / oneMinute);
    realMin.innerText = format(minute);
    const second = Math.floor((diff % oneMinute ) / oneSec);
    realSec.innerText = format(second);
    
}
let int = setInterval(getCount, 1000)
getCount()

