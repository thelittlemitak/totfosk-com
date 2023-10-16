let currentDate = new Date();
let day = currentDate.getDate();
let dayString = day.toString();
let month = currentDate.getMonth() + 1;
let monthString = month.toString();
let year = currentDate.getFullYear();
let hours = currentDate.getHours().toString();
let minutes = currentDate.getMinutes();
let minutesString = minutes.toString();

if (minutesString.length < 2) {
  minutes = "0" + minutes;
}

if (hours.length < 2) {
  hours = "0" + hours;
}

if (monthString.length < 2) {
  month = "0" + month;
}

if (dayString.length < 2) {
  day = "0" + day;
}

let formattedDate = `${hours}:${minutes}h, ${day}.${month}.${year}`;

export default formattedDate;
